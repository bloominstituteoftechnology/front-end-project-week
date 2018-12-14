import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Lambda Notes</h1>

      <Link to="/">
        <div className="view-notes button">View Notes </div>
      </Link>

      <Link to="/new">
        <div className="new-note button">Create New Note </div>
      </Link>
    </div>
  );
};

export default Menu;
