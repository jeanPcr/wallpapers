import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotosGrid.css";

const PhotosGrid = ({ photos }) => {
  return (
    <div className="container photos-grid-container">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} height={200} width={400} photo={photo} />
      ))}
    </div>
  );
};

export default PhotosGrid;
