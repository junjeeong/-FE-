import axios from "axios";

// 인증절차가 필요없는 HTTP 요청을 할 때 사용하는 인스턴스
export const instance = axios.create({
  baseURL: "https://front-mission.bigs.or.kr/", //원래는 환경변수화 하는 것이 Best Pracitce이나, 이번 과제에서는 생략하였습니다.
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인증절차가 필요한 HTTP 요청을 할 때 사용하는 인스턴스
export const authInstance = axios.create({
  baseURL: "https://front-mission.bigs.or.kr/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

authInstance.interceptors.request.use((config) => {
  const isClient = typeof window !== "undefined";

  if (isClient) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } else {
    (async () => {
      try {
        const { cookies } = await import("next/headers");
        const token = cookies().get("accessToken")?.value;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (e) {
        console.error("서버에서 쿠키 접근 중 에러", e);
      }
    })();
  }
  return config;
});

// 응답 인터셉터 추가 - accessToken이 만료되었을 때 /auth/refresh로 accessToken 재갱신 요청
authInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshRes = await instance.post("/auth/refresh");
        const newAccessToken = refreshRes.data.accessToken;
        const expiresAt = Date.now() + 100 * 60 * 15;

        localStorage.setItem("auth", JSON.stringify({ accessToken: newAccessToken, expiresAt }));

        // Authorization 헤더에 새로운 accessToken 설정 후 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return authInstance(originalRequest);
      } catch (refreshError) {
        // refreshToken도 만료되어 accessToken 재갱신도 어려운 상황
        console.error("토큰 갱신 실패 - 사유 : 리프레시 토큰 만료", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
