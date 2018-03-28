import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => (
  <div className="sideBar">
    <h1>Lambda Notes</h1>
    <Link to="/">
      <button className="sideButton"> View Your Notes </button>
    </Link>
    <Link to="/addNote">
      <button className="sideButton"> + Create New Note </button>
    </Link>
  </div>
);
