import React from "react";
import "./SideMenu.css";

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
        <div className="view-notes">
            <span>View Your Notes</span>
        </div>
        <div className="create-note">
            <span>+ Create New Note</span>
        </div>
      </div>
    </div>  
  );
};

export default SideMenu;
