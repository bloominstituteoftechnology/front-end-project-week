import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="Side-Nav">
      <h1>Lambda Notes</h1>
        <NavLink className="nav-btn" to='/'>View Your Notes</NavLink>
        <NavLink className="nav-btn" to='/create-new'>Create New Note</NavLink>
      </div>
    );
  }
}
export default Nav;
