import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = props => {
  return (
    <div className="note-container">
      <h2>Your Notes:</h2>
      <div className="all-notes">
        {props.notes.map(note => (
          <Link className="notelink" to={`/notes/${note.id}`}>
            <div className="note">
              <p className="title">{note.title}</p>
              <p>{note.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
