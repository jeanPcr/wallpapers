import React from "react";
import "./PhotoCard.css";
import { Favorite } from "@mui/icons-material";

const PhotoCard = ({ height, width, image }) => {
  return (
    <div
      style={{ height, width, backgroundImage: `url(${image})` }}
      className="card-container"
    >
      <Favorite color="inherit" className="favorite-icon" />
    </div>
  );
};

export default PhotoCard;
