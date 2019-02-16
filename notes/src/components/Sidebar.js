import React from "react";
import { Link } from "react-router-dom";

import "../styles/Sidebar.css";

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <h1 className="sidebarTitle">Lambda Notes</h1>
          <div className="sidebarButton notesButton"><Link to="/">View Your Notes</Link></div>
          <div className="sidebarButton notesButton"><Link to="/create">+ Create New Note</Link></div>
          <div className="sidebarButton notesButton"><Link to="/register">Register</Link></div>
          <div className="sidebarButton notesButton"><Link to="/login">Login</Link></div>
        </div>
      </div>
    );
  }
}
