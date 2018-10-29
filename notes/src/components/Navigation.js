import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <h1>Lambda Notes</h1>
    <Link to="/">View Your Notes</Link>
    <Link to="/add">+ Create New Note</Link>
  </nav>
);

export default Navigation;
