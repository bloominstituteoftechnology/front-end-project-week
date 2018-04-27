import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SideMenu.css";

export default class SideMenu extends Component {
  render(props) {
    return (
      <div className="SideBar">
        <br />
        <h1>My Notes</h1>
        <div className="Seperator" />
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h5>View Notes</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" style={{ textDecoration: 'none' }}>
              <h5>+ Create New Notes</h5>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
