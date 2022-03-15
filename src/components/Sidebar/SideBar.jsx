import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { useTheme } from "../../contexts/theme.context";
import "./Sidebar.css";

const SideBar = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div
      className={isDark ? `dark sidebar-container` : `light sidebar-container`}
    >
      <h3 className={isDark ? `text-light` : `text-dark`}>Wallpapers</h3>
      <FormControlLabel
        control={<Switch checked={isDark} />}
        label={isDark ? "🌜" : "☀️"}
        onChange={toggleTheme}
      />
    </div>
  );
};

export default SideBar;
