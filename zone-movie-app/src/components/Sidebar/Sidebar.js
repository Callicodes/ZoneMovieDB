import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="App-sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-menu__item">
          {/* <a href="/" className="is-active">
            Popular
          </a> */}
          <NavLink exact={true} to="/" activeClassName="is-active">
            Popular
          </NavLink>
        </li>
        <li className="sidebar-menu__item">
          <NavLink exact={true} to="/top-rated" activeClassName="is-active">
            Top Rated
          </NavLink>
          {/* <a href="/top-rated">Top Rated</a> */}
        </li>
        <li className="sidebar-menu__item">
          <NavLink
            exact={true}
            to="/genre/movie/list"
            activeClassName="is-active"
          >
            Genre
          </NavLink>
          {/* <a href="/genre/movie/list">Genre</a> */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
