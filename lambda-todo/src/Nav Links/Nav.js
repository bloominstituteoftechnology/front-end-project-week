import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = (props) =>{

    return (
      <div className="Side-Nav">
          <div className={props.deleting ? "delete-menu": null}></div>
        <h1>Lambda Notes</h1>
        <NavLink className="nav-btn" to="/">
          View Your Notes
        </NavLink>
        <NavLink className="nav-btn" to="/create-new">
          Create New Note
        </NavLink>
      </div>
    );
  }

export default Nav;
