import React from "react";
import { Link } from "react-router-dom";

const NotesList = props => {
  return (
    <div className="notes-list-div">
      <h3>Your Notes: </h3>
      <ul className="notes-list">
        {props.notes.map(note => {
          return (
            <Link className="note-link" to={`/notes/${note.id}`} key={note.id}>
              <h1>{note.title.substring(0, 10)}</h1>
              <hr />
              <p>{note.content.substring(0, 50)}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NotesList;
