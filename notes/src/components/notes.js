import React from "react";
import { Link } from "react-router-dom";

const Notes = props => {
  return (
    <div className="notes-container">
      <h2 className="yournotes">Your Notes:</h2>
      <div className="notes">
        {props.notes.map(note => (
          <Link className="notelink" to={`/notes/${note._id}`}>
            <div className="note">
              <div className="note-contents">
                <p className="note-title">{note.title}</p>
                <p className="note-text">{note.textBody}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notes;
