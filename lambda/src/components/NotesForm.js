import React from "react";
import { Link } from "react-router-dom";

const NotesForm = props => {
  return (
    <div className="Main-container">
      <h2>Notes:</h2>
      <div className="Notes-container">
        {props.notes.map(note => (
          <div className="note" key={note.id}>
            <Link to={`/notes/${note.id}`}>
              <div className="Note-title">{note.title}</div>
              <p>{note.text}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesForm;
