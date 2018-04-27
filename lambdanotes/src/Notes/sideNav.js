import React from "react";
import { Link } from "react-router-dom";
import './sideNav.css';

const SideNav = () => (
  <div className="SideNav">
        <h2 className="sideNav__title">Lambda Notes</h2>
        <Link to="/">
          <button className="sideNav__Button">View Your Notes</button>
        </Link>
        <Link to="/create">
          <button className="sideNav__Button"> Create New Note</button>
        </Link>
  </div>
);

export default SideNav;