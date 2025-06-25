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
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    window.location.href = "/signin?redirect=unauthorized";
  }
  return config;
});

// 응답 인터셉터 추가 - accessToken이 만료되었을 때 /auth/refresh로 accessToken 재갱신 요청
authInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshAccessToken = async (): Promise<string | null> => {
        try {
          const res = await axios.post("/api/auth/refresh");
          console.log("res intercept에서 refresh route에서 받아온 res는?", res);

          const newAccessToken = res.data;
          localStorage.setItem("accessToken", newAccessToken);

          return newAccessToken;
        } catch (refreshError) {
          console.error("토큰 갱신 실패 - 사유 : 리프레시 토큰 만료", refreshError);
          localStorage.removeItem("accessToken");
          window.location.href = "/signin?redirect=unauthorized";
          return Promise.reject(refreshError);
        }
      };

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return authInstance(originalRequest);
      }
    }

    return Promise.reject(error);
  },
);
