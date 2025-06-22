import axios from "axios";

// 인증절차가 필요없는 HTTP 요청을 할 때 사용하는 인스턴스
const instance = axios.create({
  baseURL: "https://front-mission.bigs.or.kr/", //원래는 환경변수화 하는 것이 Best Pracitce이나, 이번 과제에서는 생략하였습니다.
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인증절차가 필요한 HTTP 요청을 할 때 사용하는 인스턴스
const authInstance = axios.create({
  baseURL: "https://front-mission.bigs.or.kr/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// intercpetors를 사용하여 기존에 설정값에 header에 accessToken을 추가해주는 작업을 추상화
authInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
