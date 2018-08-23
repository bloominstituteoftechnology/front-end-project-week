import React from "react";
import { Link } from "react-router-dom";

import "../../css/sidebar.css";

export const SideBar = () => {
  return (
    <div className="sidebarDiv">
      <h1>Lambda</h1>
      <h1>Notes</h1>
      <div className="mainNavButtonsDiv">
        <Link to="/">
          <button>View Your Notes</button>
        </Link>
        <Link to="new-note">
          <button>+ Create New Note</button>
        </Link>
      </div>
    </div>
  );
};
