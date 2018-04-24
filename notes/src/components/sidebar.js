import React from "react";

const SideBar = props => {
  return (
    <div className="sidebar-div">
      <h1>Lambda Notes</h1>
      <div className="view-notes-button button" onClick={() => props.changeToList()}>View Your Notes</div>
      <div className="create-note-button button" onClick={() => props.changeToCreate()}>+ Create New Note</div>
    </div>
  );
};

export default SideBar;
