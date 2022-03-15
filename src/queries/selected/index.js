import { useQuery } from "react-query";
import { getSelectedPhotos } from "./selected.service";

const useSelectedPhotos = () => useQuery("selected-photos", getSelectedPhotos);

export default useSelectedPhotos;
