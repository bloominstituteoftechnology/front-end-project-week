import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-title">
        <h2>Lambda</h2>
        <h2>Notes</h2>
      </div>
      <div className="nav-button-container">
        <Link className="nav-button" to="/">
          View Your Notes
        </Link>
        <Link className="nav-button" to="/fourm">
          + Create New Note
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
