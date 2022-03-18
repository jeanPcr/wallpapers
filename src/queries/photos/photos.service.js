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
export const getFavoritesPhotos = async (photo_IDs) => {
  const promises = [];
  if (photo_IDs && photo_IDs.length > 0) {
    photo_IDs.forEach(async (photo_ID) => {
      promises.push(api.get(`/photos/${photo_ID}`));
    });
  }

  const photos = [];
  const data = await Promise.all(promises);
  data.forEach((photo) => {
    photos.push(photo.data);
  });
  return photos;
};
