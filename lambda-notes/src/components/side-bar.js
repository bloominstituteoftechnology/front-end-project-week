import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = props => {
  return (
    <div className="sideBar">
      <h1>Lambda Notes</h1>
      <NavLink className="sideButton" to="/notes">
        View Your Notes
      </NavLink>
      <NavLink className="sideButton" to="/note-form">
        +Create New Note
      </NavLink>
    </div>
  );
};

export default SideBar;
