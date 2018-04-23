import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <h1 className="Sidebar-header">
        Lambda<br />Notes
      </h1>
      <Link className="Sidebar-link" to="/notes">
        <div className="Sidebar-button">View Your Notes</div>
      </Link>
      <Link className="Sidebar-link" to="/create">
        <div className="Sidebar-button">+ Create New Note</div>
      </Link>
    </div>
  );
};

export default Sidebar;
