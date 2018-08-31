import React from "react";
// import { NavLink } from "react-router-dom";

import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="side-container">
      <h2 className="title">Lambda Notes</h2>
      <div className="side-buttons">
        {/* <NavLink to="/"> */}
          <button className="view-button">View Your Notes</button>
        {/* </NavLink> */}
        {/* <NavLink to="/create"> */}
        <button className="create-button">+ Create New Note</button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default SideNav;
