import React from "react";
import "./NotesHolder.css";
import Note from "./Notes/Note";

const NotesHolder = props => {
  return (
    <div className="notes-holder">
      <div className="note-card-section">
        <h1>Your Notes</h1>
        <Note note={props.notes} />
      </div>
      <div />
    </div>
  );
};

export default NotesHolder;
