import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 인증절차가 필요없는 HTTP 요청을 할 때 사용하는 인스턴스
export const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인증절차가 필요한 HTTP 요청을 할 때 사용하는 인스턴스
export const authInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use(async (config) => {
  const isClient = typeof window !== "undefined";

  if (isClient) {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  } else {
    try {
      const { cookies } = await import("next/headers");
      const token = cookies().get("accessToken")?.value;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      console.error("서버에서 쿠키 접근 중 에러", e);
    }
  }
  return config;
});

// 응답 인터셉터 추가 - accessToken이 만료되었을 때 /auth/refresh로 accessToken 재갱신 요청
authInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const isClient = typeof window !== "undefined";
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshAccessToken = async (): Promise<string | null> => {
        try {
          const refreshRes = isClient
            ? await axios.post("/api/auth/refresh")
            : await instance.post("/auth/refresh");

          const newAccessToken = refreshRes.data.accessToken;

          if (isClient) {
            localStorage.setItem("accessToken", newAccessToken);
          }

          return newAccessToken;
        } catch (refreshError) {
          console.error("토큰 갱신 실패 - 사유 : 리프레시 토큰 만료", refreshError);
          return null;
        }
      };

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return authInstance(originalRequest);
      }
    }

    console.log("서버에서 요청받는 에러", error.message);
    return Promise.reject(error);
  },
);
