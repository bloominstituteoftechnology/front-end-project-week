import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    window.location.reload();
  };
  return (
    <nav className="navigation">
      <h1>
        Lambda <br /> Notes
      </h1>
      <Link exact to="/">
        View Your Notes
      </Link>
      <Link to="/addnote">+ Create New Note</Link>
      <button onClick={logout}>Log Out</button>
    </nav>
  );
};

export default Navigation;
