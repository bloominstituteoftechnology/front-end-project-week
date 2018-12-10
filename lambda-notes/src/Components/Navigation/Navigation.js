import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <h1>
          Lambda
          <br />
          Notes
        </h1>
        <div className="top-btn btn">View Your Notes</div>
        <div className="btn">+ Create New Note</div>
      </div>
    </nav>
  );
};

export default Navigation;
