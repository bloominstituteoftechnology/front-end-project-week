import React from "react";
import "./NotesList.css";
import Note from "./Note";

const NotesList = props => {
  {
    console.log(props.notes);
  }
  return (
    <div className="notes-container">
      {props.notes.map(note => (
        <Note note={note} />
      ))}
    </div>
  );
};

export default NotesList;
