import api from "./axios";

//
// GET HOME PAGE DATA
//
export const getHomeData = async () => {
  const response = await api.get("/home/");

  return response.data;
};
