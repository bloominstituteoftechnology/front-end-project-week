import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SideBar = props => {
  return (
    <div className="sidebar-wrapper">
      <Link to="/">
        <h1 className="lambda-notes">Brian's</h1>
        <h1 className="lambda-notes">Notes</h1>
      </Link>
      <Link to="/">
        <button className="button-view-notes">View Your Notes</button>
      </Link>
      <Link to="/add-note">
        <button className="button-create">+ Create New Note</button>
      </Link>
    </div>
  );
};

export default SideBar;
