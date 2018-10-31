import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <h1>
        Lambda <br />
        Notes
      </h1>
      <div className="menu-btn-container">
        <Link to="/notes">
          <button className="view-all-btn">View Your Notes</button>
        </Link>
        <Link to="/new">
          <button className="new-note-btn">+ Create New Note</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
