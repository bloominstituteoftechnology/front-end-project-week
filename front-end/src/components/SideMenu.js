import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import "./SideMenu.css";

export default class SideMenu extends Component {
  render(props) {
    return (
      <div className="SideBar">
        <h1>Lambda Notes</h1>
          <NavLink href="/">
            <button>View Your Notes</button>
          </NavLink>

          <NavLink href="/note/create">
            <button>+ Create New Notes</button>
          </NavLink>
      </div>
    );
  }
}
