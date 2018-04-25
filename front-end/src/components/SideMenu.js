import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SideMenu.css";

export default class SideMenu extends Component {
  render(props) {
    return (
      <div className="SideBar">
        <h1>Lambda Notes</h1>
          <Link to="/">
            <button>View Your Notes</button>
          </Link>

          <Link to="/create">
            <button>+ Create New Notes</button>
          </Link>
      </div>
    );
  }
}
