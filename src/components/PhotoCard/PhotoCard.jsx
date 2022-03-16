import React from "react";
import "./PhotoCard.css";
import { Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PhotoCard = ({ height, width, photo, size }) => {
  let navigate = useNavigate();
  const viewPhoto = () => {
    navigate(`/photos/one/${photo.id}`, { state: { photo } });
  };
  const addToFavorite = (event) => {
    event.stopPropagation();
    let favorites = {};
    const prev_favorites = JSON.parse(window.localStorage.getItem("favorites"));
    console.log(prev_favorites);
    if (prev_favorites.photos) {
      favorites = {
        photos: [...prev_favorites.photos, photo.id],
      };
    } else {
      favorites = {
        photos: [photo.id],
      };
    }

    console.log(favorites);
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <div
      style={{ height, width, backgroundImage: `url(${photo.src.medium})` }}
      className="card-container"
      onClick={viewPhoto}
    >
      <Favorite
        onClick={addToFavorite}
        color="inherit"
        className="favorite-icon"
      />
    </div>
  );
};

export default PhotoCard;
