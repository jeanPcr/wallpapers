import React from "react";
import { useTheme } from "../../contexts/theme.context";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotosGrid.css";

const PhotosGrid = ({ photos }) => {
  const { isDark } = useTheme();
  if (!photos) {
    return (
      <h2 className={isDark ? `text-light` : `text-dark `}>
        Vous n'avez aucune photo pour l'instant.
      </h2>
    );
  }
  return (
    <div className="container photos-grid-container">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} height={200} width={400} photo={photo} />
      ))}
    </div>
  );
};

export default PhotosGrid;
