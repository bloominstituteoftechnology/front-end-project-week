import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1 className="title">Lambda Notes</h1>
        <Link to="/notelist">
          <button className="button button--teal">View Your Notes</button>
        </Link>
        <Link to="/noteform">
          <button className="button button--teal">+ Create New Note</button>
        </Link>
      </div>
    );
  }
}

export default SideBar;
