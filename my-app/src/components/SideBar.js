import React from "react";
const SideBar = props => {
  return (
    <div className="sidebar">
      <h1>Lambda Notes</h1>
      <div className="button view-button">View Your Notes</div>
      <div className="button create-button">+ Create New Note</div>
    </div>
  );
};
export default SideBar;
