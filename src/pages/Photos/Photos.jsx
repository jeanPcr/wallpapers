import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useTheme } from "../../contexts/theme.context";

import "./Photos.css";
import PhotosGrid from "../../components/PhotosGrid/PhotosGrid";
import { useResearch } from "../../contexts/research.context";
import usePhotosByTopic from "../../queries/photos";

const Photos = () => {
  const { isDark } = useTheme();
  const { photoID } = useParams();

  const { research } = useResearch();
  const { data, isLoading } = usePhotosByTopic(research);

  if (isLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (photoID) {
    return (
      <div className="container">
        <div onClick={() => window.history.back()} className="arrow-back-btn">
          <ArrowBack
            fontSize="large"
            className={isDark ? `text-light` : `text-dark `}
          />
        </div>
        <Outlet />
      </div>
    );
  }

  return (
    <div className="container">
      <div onClick={() => window.history.back()} className="arrow-back-btn">
        <ArrowBack
          fontSize="large"
          className={isDark ? `text-light` : `text-dark `}
        />
      </div>

      {data && (
        <div>
          <h1 className={isDark ? `text-light` : `text-dark `}>
            {`Resultats pour "${research}"`}
          </h1>
          <PhotosGrid photos={data.photos} />
        </div>
      )}
    </div>
  );
};

export default Photos;
