import React from "react";
import Note from "./Note";

const NoteList = props => {
  return (
    <div className="note-list">
      {props.notes.map(note => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
