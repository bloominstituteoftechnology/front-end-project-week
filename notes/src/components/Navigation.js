import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <h1>
      Lambda <br /> Notes
    </h1>
    <Link exact to="/">
      View Your Notes
    </Link>
    <Link to="/addnote">+ Create New Note</Link>
  </nav>
);

export default Navigation;
