import React from "react";

const SideBar = () => {
  return (
    <div className="side-bar">
      <h1>
        Lambda <br />
        Notes
      </h1>
      <div className="view-note">View Your Notes</div>
      <div className="create-note">
        <i className="fas fa-plus" />
        Create New Note
      </div>
    </div>
  );
};

export default SideBar;
