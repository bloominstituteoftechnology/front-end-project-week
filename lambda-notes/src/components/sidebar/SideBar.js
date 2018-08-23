import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidebarDiv">
      <h1>Lambda</h1>
      <h1>Notes</h1>
      <Link to="/">
        <button>View Your Notes</button>
      </Link>
      <Link to="new-note">
        <button>+ Create New Note</button>
      </Link>
    </div>
  );
};
