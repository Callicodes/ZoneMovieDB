import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <h1 className="rmdb-slogan">Making What Matters</h1>
        <img
          className="rmdb-logo"
          src="./images/zoneLogo.svg"
          alt="rmdb-logo"
        />

        <img
          className="rmdb-tmdb-logo"
          src="./images/tmdb_logo.png"
          alt="tmdb-logo"
        />
        <div>
          {" "}
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
export default Header;
