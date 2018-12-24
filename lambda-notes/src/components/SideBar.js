import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <h1>
        Lambda <br />
        Notes
      </h1>
      <Link to="/">
        <div className="view-note">View Your Notes</div>
      </Link>
      <Link to="/add">
        <div className="create-note">
          <i className="fas fa-plus" />
          Create New Note
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
