import { useQuery } from "react-query";
import { getPhotosByTopic } from "./photos.service";

const usePhotosByTopic = (topic) =>
  useQuery(["photos-topic", topic], () => getPhotosByTopic(topic), {
    enabled: !!topic,
  });

export default usePhotosByTopic;
