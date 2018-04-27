import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar-heading">
        {" "}
        Lambda <br /> Notes{" "}
      </h2>

      <Link to="/">
        <div className="button"> View Your Notes </div>
      </Link>

      <Link to="/create">
        <div className="button"> Create New Note </div>
      </Link>
    </div>
  );
};
export default Navbar;
