import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="column">
        <h1 className="logo">Lambda Notes</h1>
        <div className="one column">
          <NavLink exact to="/">
            <button className="button-primary">View Your Notes</button>
          </NavLink>
          <NavLink to="/note-form">
            <button className="button-primary"> + Create New Note</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
