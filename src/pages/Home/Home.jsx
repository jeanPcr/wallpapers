import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useTheme } from "../../contexts/theme.context";
import "./Home.css";
import LOGO from "../../assets/images/logo.png";
import CuratedPhotos from "../../components/CuratedPhotos/CuratedPhotos";

const Home = () => {
  const { isDark } = useTheme();

  return (
    <div className="container">
      <img alt="logo" className="logo" src={LOGO} />
      <h1 className={isDark ? `text-light w-70 title` : `text-dark w-70 title`}>
        Trouver le fond d'écran qui vous correspond le mieux !
      </h1>
      <SearchBar />
      <CuratedPhotos />
    </div>
  );
};

export default Home;
