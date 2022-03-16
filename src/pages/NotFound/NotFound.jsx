import React from "react";
import { useTheme } from "../../contexts/theme.context";
import "./NotFound.css";

const NotFound = () => {
  const { isDark } = useTheme();
  return (
    <div className="container">
      {isDark ? (
        <img
          src={require("../../assets/images/404_dark.png")}
          alt="404 not found dark"
          className="notfound-img"
        />
      ) : (
        <img
          src={require("../../assets/images/404_light.png")}
          alt="404 not found light"
          className="notfound-img"
        />
      )}
      <h1
        className={isDark ? `text-light w-70 title` : `text-dark w-70 title`}
        style={{ fontSize: "3em" }}
      >
        Oups, page introuvable...
      </h1>
    </div>
  );
};

export default NotFound;
