import React from "react";
import NoteCard from "./NoteCard";

const NoteList = props => {
  return (
    <div className="note-card-container">
      <div className="notes-header">
        <h3>Your Notes</h3>
      </div>
      {props.notes.map(note => {
        return <NoteCard key={note._id} deleteNote={props.deleteNote} note={note} editNote={props.editNote} />;
      })}
    </div>
  );
};

export default NoteList;
