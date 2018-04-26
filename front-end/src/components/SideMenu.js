import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SideMenu.css";

export default class SideMenu extends Component {
  render(props) {
    return (
      <div className="SideBar">
        <br />
        <h1>Lambda Notes</h1>
        <hr />
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link to="/">
              <h5>View Notes</h5>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/create">
              <h5>+ Create New Notes</h5>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
