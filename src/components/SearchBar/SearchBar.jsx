import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import "./SearchBar.css";
import { useTheme } from "../../contexts/theme.context";
import { useResearch } from "../../contexts/research.context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { isDark } = useTheme();
  const { setResearch } = useResearch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    setResearch(search);
    navigate("/photos");
  };
  return (
    <form className="searchbar-container" onSubmit={handlesubmit}>
      <input
        required
        className={
          isDark ? `dark searchbar-input` : `light searchbar-input shadow`
        }
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Entrer un mot clé, catégorie, couleur..."
        maxLength={20}
      />
      <button type="submit" className="search-btn">
        <Search />
      </button>
    </form>
  );
};

export default SearchBar;
