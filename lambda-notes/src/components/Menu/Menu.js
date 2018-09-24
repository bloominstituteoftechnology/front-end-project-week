import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Lambda Notes</h1>
      <div className="view-notes button">
        <Link to="/">View Notes</Link>
      </div>
      <div className="new-note button">
        <Link to="/new">Create New Note</Link>
      </div>
    </div>
  );
};

export default Menu;
