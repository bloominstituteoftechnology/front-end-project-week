import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="sideBar">
        <h1 className="sideBar__headline">
          Lambda
          <br />
          Notes
        </h1>
        <div className="link-section">
          <NavLink exact to="/" activeClassName="link">
            <button class="btn">View Your Notes</button>
          </NavLink>
          <br />
          <NavLink to="/submit" activeClassName="link">
            <button class="btn">+ Create New Note</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
