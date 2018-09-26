import React from "react";
import "./NotesList.css";
import Note from "./Note";

const NotesList = props => {
  return (
    <div className="notes-container">
      <h1>Your Notes:</h1>
      <div className="notes-blocks">
        {props.notes.map(note => (
          <Note note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
