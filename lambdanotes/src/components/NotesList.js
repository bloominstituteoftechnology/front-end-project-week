import React from 'react';

import './ComponentStyle.css';

function NotesList(props) {
  if (!props.notesList.length) {
    return <h1>Fetching notes!</h1>;
  }
  return (
    <div className="note-container">
      <h1 className="notes-title">Your Notes:</h1>
      {props.notesList.map(note => (
        <div key={note.id} className="note-card">
          <h1
            className="note-title"
            onClick={() => props.history.push(`/${note.id}`)}
          >
            {note.title.length > 20
              ? `${note.title.slice(0, 20)}...`
              : note.title}
          </h1>
          <span className="line" />
          <p className="note-text">
            {note.body.length > 120
              ? `${note.body.slice(0, 120)}...`
              : note.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
