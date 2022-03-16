import React, { useEffect, useState } from "react";
// import PhotosGrid from "../../components/PhotosGrid/PhotosGrid";
import { useTheme } from "../../contexts/theme.context";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { isDark } = useTheme();
  useEffect(() => {
    const fav_storage = JSON.parse(window.localStorage.getItem("favorites"));

    if (fav_storage.photos) {
      setFavorites(fav_storage.photos);
    }
  }, []);
  console.log(favorites);
  return (
    <div className="container">
      <h1 className={isDark ? `text-light` : `text-dark `}>
        Mes fonds d'écran favoris
      </h1>
      {favorites.length !== 0 ? (
        // <PhotosGrid photos={favorites} />
        <p className={isDark ? `text-light` : `text-dark `}>
          Fond d'écran favoris ...
        </p>
      ) : (
        <h2 className={isDark ? `text-light` : `text-dark `}>
          Vous n'avez aucune photo pour l'instant.
        </h2>
      )}
    </div>
  );
};

export default Favorites;
