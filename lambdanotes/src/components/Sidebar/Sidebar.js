import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  // <div style={{ display: "flex" }}>
  <div className="sidebar">
    <ul
      style={{
        listStyleType: "none",
        padding: 0
      }}
    >
      <li>
        <h1>Lambda</h1>
        <h1>Notes</h1>
      </li>
      <li>
        <Link to="/">View Your Notes</Link>
      </li>
      <li>
        <Link to="/create">+ Create New Note</Link>
      </li>
    </ul>
  </div>
  // </div>
);

export default Sidebar;
