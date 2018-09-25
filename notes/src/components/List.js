import React from "react";
import Note from "./Note";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function List(props) {
  if (!props.notesList || !props.notesList.length) {
    return <h1>No Notes! Go fetch!</h1>;
  }
  return (
    <div className="notes-list-wrapper">
      {props.notesList.map(note => (
        <div className="note-card" key={note._id}>
          <Link to={`/note/get/${note._id}`}>
            <Note note={note} />
          </Link>
        </div>
      ))}
    </div>
  );
}
