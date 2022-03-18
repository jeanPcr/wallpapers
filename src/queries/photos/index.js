import { useQuery } from "react-query";
import { getFavoritesPhotos, getPhotosByTopic } from "./photos.service";

export const usePhotosByTopic = (topic) =>
  useQuery(["photos-topic", topic], () => getPhotosByTopic(topic), {
    enabled: !!topic,
  });
export const useFavoritesPhotos = (photo_IDs) => {
  return useQuery(["favorites-photos", photo_IDs], () =>
    getFavoritesPhotos(photo_IDs)
  );
};
