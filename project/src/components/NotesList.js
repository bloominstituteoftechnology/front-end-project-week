import React from "react";
import { Link } from "react-router-dom";
import Note from "./Note";

const NotesList = props => {
  if (!props.notesList || !props.notesList.length) {
    return <h1>No notes :(</h1>;
  }
  return (
    <div className="notes-list-wrapper">
      {props.notesList.map(note => (
        <div className="note-card" key={note._id}>
          <Link to={`/notes/${note._id}`}>
            <Note note={note} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
