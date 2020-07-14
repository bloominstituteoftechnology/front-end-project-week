import React from "react";
import { Link } from "react-router-dom";
// import ListView from "./ListView";
// import CreateView from "./CreateView";

import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="side-container">
      <h2 className="title">Lambda Notes</h2>
      <div className="side-buttons">
        <Link to="/">
          <button className="view-button">View Your Notes</button>
        </Link>
        <Link to="/create">
          <button className="create-button">+ Create New Note</button>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
