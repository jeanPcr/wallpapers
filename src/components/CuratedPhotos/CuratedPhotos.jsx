import { CircularProgress } from "@mui/material";
import React from "react";
import { useTheme } from "../../contexts/theme.context";
import useSelectedPhotos from "../../queries/selected";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./CuratedPhotos.css";

const CuratedPhotos = () => {
  const { isDark } = useTheme();
  const { data, isLoading } = useSelectedPhotos();

  if (isLoading) {
    return <CircularProgress variant="determinate" />;
  }
  console.log(data);
  return (
    <div className="container">
      <h1 className={isDark ? `text-light` : `text-dark`}>
        Photos sélectionnées par l’équipe
      </h1>
      <div className="curated-container">
        <div className="cards-container">
          {data ? (
            data.photos.map((photo) => (
              <PhotoCard height={150} width={250} image={photo.src.small} />
            ))
          ) : (
            <h3>Aucune photos trouvées</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default CuratedPhotos;
