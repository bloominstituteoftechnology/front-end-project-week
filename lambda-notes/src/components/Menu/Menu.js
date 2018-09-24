import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Lambda Notes</h1>
      <div className="view-notes button">View Notes</div>
      <div className="new-note button">Create New Note</div>
    </div>
  );
};

export default Menu;
