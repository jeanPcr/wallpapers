import React, { useEffect, useState } from "react";
import PhotosGrid from "../../components/PhotosGrid/PhotosGrid";
import { useTheme } from "../../contexts/theme.context";
import { useLocalStorage } from "../../helpers/localStorage";
import { useFavoritesPhotos } from "../../queries/photos";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { isDark } = useTheme();
  const localStorage = useLocalStorage("favorites");
  let photo_IDs = [];
  if (localStorage[0]) {
    photo_IDs = localStorage[0].photo_IDs;
  }
  const { data, isLoading } = useFavoritesPhotos(photo_IDs);
  useEffect(() => {
    setFavorites(data);
  }, [data]);

  if (isLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className={isDark ? `text-light` : `text-dark `}>
        Mes fonds d'écran favoris
      </h1>
      {data && data.length > 0 ? (
        <PhotosGrid photos={favorites} />
      ) : (
        <h2 className={isDark ? `text-light` : `text-dark `}>
          Vous n'avez aucune photo pour l'instant.
        </h2>
      )}
    </div>
  );
};

export default Favorites;
