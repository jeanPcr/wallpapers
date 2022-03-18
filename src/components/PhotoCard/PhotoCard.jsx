import React, { useEffect, useState } from "react";
import "./PhotoCard.css";
import { Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PhotoCard = ({ height, width, photo }) => {
  let navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    const storage = window.localStorage.getItem("favorites");
    if (storage !== "undefined") {
      setStorage(JSON.parse(storage));
    }
  }, []);

  useEffect(() => {
    if (storage && storage.photo_IDs) {
      storage.photo_IDs.forEach((photo_ID) => {
        if (photo.id === photo_ID) {
          setIsFavorite(true);
        }
      });
    }
  }, [storage]);

  const viewPhoto = () => {
    navigate(`/photos/one/${photo.id}`, { state: { photo } });
  };
  const toggleFavorite = (event) => {
    event.stopPropagation();
    let favorites = {};
    if (storage && storage.photo_IDs) {
      if (storage.photo_IDs.includes(photo.id)) {
        favorites = {
          photo_IDs: storage.photo_IDs.filter(
            (photo_ID) => photo_ID !== photo.id
          ),
        };
      } else {
        favorites = {
          photo_IDs: [...storage.photo_IDs, photo.id],
        };
      }
    } else {
      favorites = {
        photo_IDs: [photo.id],
      };
    }
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
    setStorage(favorites);
  };
  return (
    <div
      style={{ height, width, backgroundImage: `url(${photo.src.medium})` }}
      className="card-container"
      onClick={viewPhoto}
    >
      <Favorite
        onClick={toggleFavorite}
        color="inherit"
        className={isFavorite ? "favorite-icon active" : "favorite-icon"}
      />
    </div>
  );
};

export default PhotoCard;
