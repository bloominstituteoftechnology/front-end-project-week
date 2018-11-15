import React from "react";
import { Link } from "react-router-dom";

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <h1 className="sidebarTitle">Lambda Notes</h1>
          <div className="notesButton"><Link to="/">View Your Notes</Link></div>
          <div className="newNoteButton"><Link to="/create">+ Create New Note</Link></div>
        </div>
      </div>
    );
  }
}