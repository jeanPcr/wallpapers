import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    if (search.trim() === " ") {
      console.log("Ressearch...");
    } else {
      console.error("Veuillez remplir le champ pour effectuer une recherche");
    }
  };
  return (
    <form className="searchbar-container" onSubmit={handlesubmit}>
      <input
        required
        className="searchbar-input"
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
