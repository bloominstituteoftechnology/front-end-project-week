import React from "react";

import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <h1>
          Lambda
          <br />
          Notes
        </h1>
        <NavLink exact to="/">
          <div className="top-btn btn blue">View Your Notes</div>
        </NavLink>
        <NavLink to="/add-note">
          <div className="btn blue">+ Create New Note</div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
