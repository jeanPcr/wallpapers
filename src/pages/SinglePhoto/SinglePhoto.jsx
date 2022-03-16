import React from "react";
import { useLocation } from "react-router-dom";
import { Download, Favorite } from "@mui/icons-material";
import { saveAs } from "file-saver";
import "./SinglePhoto.css";
import { useTheme } from "../../contexts/theme.context";

const SinglePhoto = () => {
  const { isDark } = useTheme();
  const { state } = useLocation();
  const { photo } = state;

  const downloadImage = () => {
    saveAs(photo.url, `wallpaper/${photo.id}.jpg`);
  };
  const addToFavorite = () => {};
  return (
    <div className="container single-photo ">
      <div
        style={{ backgroundImage: `url(${photo.src.original})` }}
        className="image"
      >
        <span className="placeholder" />
      </div>
      <div className="description">
        <div className={isDark ? `text-light` : `text-dark`}>
          <p>
            <span className="bold">Photograph :</span> {photo.photographer}
          </p>
        </div>

        <div
          onClick={addToFavorite}
          className={
            isDark
              ? `text-light img-details pointer`
              : `text-dark img-details pointer`
          }
        >
          <p className="centered">
            Ajouter au favoris
            <Favorite
              className={
                isDark ? `dark text-secondary` : `light text-secondary`
              }
              fontSize="medium"
            />
          </p>
        </div>

        <div
          onClick={downloadImage}
          className={
            isDark
              ? `text-light img-details pointer`
              : `text-dark img-details pointer`
          }
        >
          <p className="centered">
            Télécharger
            <Download
              className={isDark ? `dark text-primary` : `light text-primary`}
              fontSize="medium"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePhoto;
