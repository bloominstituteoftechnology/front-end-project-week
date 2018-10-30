import React from "react";
import NoteCard from "./NoteCard";

const Note = props => {
  return (
    <div className="note-card-container">
      {props.notes.map(note => {
        return <NoteCard key={note._id} deleteNote={props.deleteNote} note={note} editNote={props.editNote} />;
      })}
    </div>
  );
};

export default Note;
