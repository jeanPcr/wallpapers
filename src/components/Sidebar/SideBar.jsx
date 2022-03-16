import {
  Divider,
  FormControlLabel,
  List,
  ListItem,
  Switch,
} from "@mui/material";
import React from "react";
import { useTheme } from "../../contexts/theme.context";
import { Home, Favorite } from "@mui/icons-material";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { isDark, toggleTheme } = useTheme();
  const navigation = useNavigate();
  return (
    <div
      className={isDark ? `dark sidebar-container` : `light sidebar-container`}
    >
      <List>
        <ListItem
          onClick={() => navigation("/")}
          style={{ alignItems: "center", cursor: "pointer" }}
          className={
            isDark ? `dark text-primary title` : `light text-primary title`
          }
        >
          <Home fontSize="large" />
          <h2>Wallpapers</h2>
        </ListItem>
        <Divider
          className={isDark ? `bg-light` : `bg-dark`}
          variant="fullWidth"
          component="li"
        />
        <ListItem className={isDark ? `text-light title` : `text-dark title`}>
          <div style={{ marginRight: "10px" }}>Theme</div>
          <FormControlLabel
            control={<Switch checked={isDark} />}
            label={isDark ? "☀️" : "🌜"}
            onChange={toggleTheme}
          />
        </ListItem>
        <Divider
          className={isDark ? `bg-light` : `bg-dark`}
          variant="fullWidth"
          component="li"
        />
        <ListItem
          style={{ cursor: "pointer" }}
          onClick={() => navigation("favorites")}
          className={isDark ? `text-light ` : `text-dark `}
        >
          <div style={{ marginRight: "10px" }} className="title">
            Favorites
          </div>
          <Favorite fontSize="medium" />
        </ListItem>
      </List>
    </div>
  );
};

export default SideBar;
