import api from "../../api";

export const getSelectedPhotos = async () => {
  return (
    await api.get("/curated", {
      params: { per_page: 10, orientation: "landscape" },
    })
  ).data;
};
