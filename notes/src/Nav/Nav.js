import "./Nav.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <h1> Lambda Notes </h1>
    <ul>
      <li>
        <NavLink to="/">View</NavLink>
      </li>
      <li>
        <NavLink to="/create"> +Create</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;