import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NoteList = props => {
  return (
    <div className="note-container">
      <h2>Your Notes:</h2>
      <div className="all-notes">
        {props.notes.map(note => (
          <Link className="notelink" to={`/notes/${note.id}`}>
            <div className="note">
              <div className="note-contents">
                <p className="title">{note.title}</p>
                <p>{note.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
