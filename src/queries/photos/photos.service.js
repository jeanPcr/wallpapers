import api from "../../api";

export const getPhotosByTopic = async (topic) => {
  return (
    await api.get("/search", {
      params: { per_page: 10, query: topic, orientation: "landscape" },
    })
  ).data;
};
export const getPhotosByColor = async (color) => {
  return (
    await api.get("/search", {
      params: { per_page: 10, color, orientation: "landscape" },
    })
  ).data;
};
export const getPhotosByLocation = async (locale) => {
  return (
    await api.get("/search", {
      params: { per_page: 10, locale, orientation: "landscape" },
    })
  ).data;
};
