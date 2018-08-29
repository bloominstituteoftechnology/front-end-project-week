import React from "react";

import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="side-container">
      <h2 className="title">Lambda Notes</h2>
      <div className="side-buttons">
        <button className="view-button">View Your Notes</button>
        <button className="create-button">+ Create New Note</button>
      </div>
    </div>
  );
};

export default SideNav;
