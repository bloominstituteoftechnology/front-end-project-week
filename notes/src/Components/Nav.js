import React from "react";
import "../App.css";

const Nav = () => {
  return (
    <div className="navbar">
      <h1>
        Lambda<br />Notes
      </h1>
      <div className="button">View Your Notes</div>
      <div className="button">+ Create New Note</div>
    </div>
  );
};

export default Nav;
