import api from "./axios";

//
// GET ACTIVE ANNOUNCEMENTS
//
export const getAnnouncements = async () => {
  const response = await api.get("/settings/announcement/");

  return response.data;
};
