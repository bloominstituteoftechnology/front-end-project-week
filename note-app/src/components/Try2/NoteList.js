import React from "react";
import Note from "./Note.js";
import { Link } from "react-router-dom";

const noteList = {};
const NoteList = props => {
  return (
    <div className="noteList">
      <h2>Your Notes:</h2>
      {props.notes.map(note => {
        return (
          <div key={note.id}>
            <Link to={`/${note.id}`}>
              <Note note={note} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
