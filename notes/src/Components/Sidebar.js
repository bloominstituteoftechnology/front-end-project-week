import React from "react";
import { Link } from "react-router-dom";

import "../styles/Styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Lambda Notes</h1>
      <Link to="/">
        <div className="button">View Your Notes</div>
      </Link>
      <Link to="/AddNote">
        <div className="button">+ Create New Note</div>
      </Link>
    </div>
  );
};

export default Sidebar;
