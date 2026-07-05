import api from "./axios";

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me/");
  return response.data;
};

export const logoutUser = async () => {
  const refresh = localStorage.getItem("refresh_token");

  try {
    await api.post("/auth/logout/", {
      refresh,
    });
  } catch (error) {
    console.error(error);
  }

  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
};