import React from "react";
import { Link } from "react-router-dom";
const MobileNav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h5>All notes</h5>
      </Link>
      <Link to="/add">
        <h5>Create New Note</h5>
      </Link>
    </nav>
  );
};

export default MobileNav;
