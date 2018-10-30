import React from 'react';

import './ComponentStyle.css';

function NotesList(props) {
  if (!props.notesList || !props.notesList.length) {
    return <h1>Fetching notes!</h1>;
  }
  return (
    <div className="note-container">
      <h1 className="notes-title">Your Notes:</h1>
      {props.notesList.map(note => (
        <div key={note._id} className="note-card">
          <h1
            className="note-title"
            onClick={() => props.history.push(`/${note._id}`)}
          >
            {note.title}
          </h1>
          <span className="line" />
          <p className="note-text">{note.textBody}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
