import React from "react";
import "./NotesList.css";
import Note from "./Note";

const NotesList = props => {
  return (
    <div className="notes-container">
      {props.notes.map(note => (
        <Note note={note} />
      ))}
    </div>
  );
};

export default NotesList;
