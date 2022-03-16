import React, { createRef } from "react";
import { CircularProgress } from "@mui/material";
import { useTheme } from "../../contexts/theme.context";
import useSelectedPhotos from "../../queries/selected";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./CuratedPhotos.css";

const CuratedPhotos = () => {
  const { isDark } = useTheme();
  const { data, isLoading } = useSelectedPhotos();
  const ref = createRef();
  if (isLoading) {
    return (
      <div className="container">
        <CircularProgress color="primary" variant="determinate" />
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className={isDark ? "text-light" : "text-dark"}>
        Photos sélectionnées par l’équipe
      </h2>
      <div className="curated-container">
        <div
          ref={ref}
          onWheel={(evt) => {
            ref.current.addEventListener("wheel", (event) => {
              event.preventDefault();
            });
            ref.current.scrollLeft += evt.deltaY * 7;
          }}
          className={isDark ? "dark cards-container" : "light cards-container"}
        >
          {data ? (
            data.photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                height={150}
                width={250}
                photo={photo}
              />
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
