import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // Refresh Token 쿠키 포함
});

// 요청 인터셉터 → 모든 요청에 Access Token 자동 추가
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 → Access Token 만료 시 자동 재발급
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshRes = await axios.post("http://localhost:8080/auth/refresh", {}, {
          withCredentials: true,
        });

        const newAccessToken = refreshRes.data.accessToken;
        sessionStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest); // 원래 요청 재시도
      } catch (refreshError) {
        console.log("Refresh토큰 만료");
        sessionStorage.removeItem("accessToken");
        console.log("accessToken 삭제");

        window.location.href = "/signin";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
