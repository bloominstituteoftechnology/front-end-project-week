import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    <ul
      style={{
        listStyleType: "none",
        padding: 0
      }}
    >
      <li>
        <h1 className="sidebar__title">Lambda Notes</h1>
      </li>
      <li>
        <Link to="/">
          <button className="sidebar__button">View Your Notes</button>
        </Link>
      </li>
      <li>
        <Link to="/create">
          <button className="sidebar__button">+ Create New Note</button>
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
