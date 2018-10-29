import React, { Component } from "react";
import { Link } from "react-router-dom";

import NotesList from "./NotesList";
import NoteForm from "./NoteForm";
import Note from "./Note";

const Sidebar = props => {
  const clickHandler = event => {
    event.preventDefault();
  };

  return (
    <section className="Sidebar">
      <h1>Lambda Notes</h1>
      <Link to="/">
        <div className="view-notes-button">View Your Notes</div>
      </Link>

      <Link to="create">
        <div className="create-note-button">+ Create New Note</div>
      </Link>
    </section>
  );
};

export default Sidebar;
