import React from "react";
import { Link } from "react-router-dom";

const SideBar = props => {
  return (
    <div className="sidebar">
      <h1>Lambda Notes</h1>
      <Link to="/get/all">
        <div className="button view-button">View Your Notes</div>
      </Link>
      <Link to="/add">
        <div className="button create-button">+ Create New Note</div>
      </Link>
    </div>
  );
};
export default SideBar;
