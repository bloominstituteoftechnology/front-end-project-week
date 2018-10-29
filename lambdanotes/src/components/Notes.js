import React, { Fragment } from 'react';

import './ComponentStyle.css';

const Notes = props => {
  return (
    <Fragment>
      <div className="sidebar">
        <h1 className="sidebar-title">Lambda Notes</h1>
        <button className="button">View Your Notes</button>
        <button className="button">+ Create New Note</button>
      </div>
      <div className="note-container">
        <h1 className="notes-title">Your Notes:</h1>
        {props.notes.map(note => {
          return (
            <div key={note.id} className="note-card">
              <h1 className="note-title">{note.title}</h1>
              <p className="note-text">{note.textBody}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Notes;
