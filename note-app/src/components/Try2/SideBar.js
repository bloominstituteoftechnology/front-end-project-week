import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = props => {
  return (
    <div>
      <div className="SideBarStyle">
        <h1>
          Lambda <br />Notes{" "}
        </h1>
      </div>
      <NavLink className="button" to="/">
        View Your Notes
      </NavLink>
      <NavLink className="button" to="/newNote">
        + Create New Note
      </NavLink>
    </div>
  );
};
export default SideBar;
