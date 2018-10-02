import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Lambda Notes</h1>
      <Link classname="nav-link" to="/">
        View Your Notes
      </Link>
      <Link className="nav-link" to="/newnote">
        Create New Note
      </Link>
    </div>
  );
};

export default Menu;
