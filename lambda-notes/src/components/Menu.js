import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <h1>
        Lambda <br />
        Notes
      </h1>
      <Link to="/notes">
        <button className="menu-btn">View Your Notes</button>
      </Link>
      <Link to="/new">
        <button className="menu-btn">+ Create New Note</button>
      </Link>
    </div>
  );
};

export default Menu;
