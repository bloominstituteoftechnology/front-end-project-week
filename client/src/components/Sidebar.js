import React, { Component } from "react";
import { Link } from "react-router-dom";

import NotesList from "./NotesList";
import NoteForm from "./NoteForm";
import Note from "./Note";
import SidebarHeader from "./SidebarHeader";

const Sidebar = props => {
  const clickHandler = event => {
    event.preventDefault();
  };

  return (
    <section className="sidebar">
      <SidebarHeader />
      <div>
        <Link to="/">
          <div className="sidebar-button">View Your Notes</div>
        </Link>

        <Link to="/create">
          <div className="sidebar-button">+ Create New Note</div>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
