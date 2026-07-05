import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 10000,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

/*
|--------------------------------------------------------------------------
| REQUEST INTERCEPTOR
|--------------------------------------------------------------------------
*/

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/*
|--------------------------------------------------------------------------
| RESPONSE INTERCEPTOR
|--------------------------------------------------------------------------
*/

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // Ignore if no response
    if (!error.response) {
      return Promise.reject(error);
    }

    // Don't try to refresh the refresh-token endpoint itself
    if (originalRequest.url.includes("/token/refresh/")) {
      localStorage.clear();
      window.location.href = "/login";
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization =
              `Bearer ${token}`;

            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken =
          localStorage.getItem("refresh_token");

        if (!refreshToken) {
          throw new Error("Refresh token missing");
        }

        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/users/token/refresh/`,
          {
            refresh: refreshToken,
          }
        );

        const {
          access,
          refresh,
        } = response.data;

        // Save new access token
        localStorage.setItem(
          "access_token",
          access
        );

        // Save rotated refresh token (if backend returns one)
        if (refresh) {
          localStorage.setItem(
            "refresh_token",
            refresh
          );
        }

        api.defaults.headers.common.Authorization =
          `Bearer ${access}`;

        processQueue(null, access);

        originalRequest.headers.Authorization =
          `Bearer ${access}`;

        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);

        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");

        window.location.href = "/login";

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;