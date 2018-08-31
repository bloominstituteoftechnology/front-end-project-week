import React from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="lambda">
        <h1>Lambda</h1>
      </div>
      <div className="notes">
        <h1>Notes</h1>
      </div>
      <div className="buttons">
        <Link to="/yournotes">
          <div className="view-notes">
            <span>View Your Notes</span>
          </div>
        </Link>
        <Link to="/createnote">
          <div className="create-note">
            <span>+ Create New Note</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
