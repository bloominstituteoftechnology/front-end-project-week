import React from "react";
import { Route, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <h1>Lambda Notes</h1>
      <NavLink to="/notes">View Your Notes</NavLink>
      <NavLink to="/note-form">+Create New Note</NavLink>
    </div>
  );
};

export default SideBar;
