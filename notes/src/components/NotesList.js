import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NotesList = props => {
  return (
    <div className = 'note-container'>
      <h2>Notes:</h2>
      <div className = 'notes'>
        {props.notes.map(note => (
          <Link className = 'note-link' to = {`/notes/${note.id}`}>
            <div className = 'note'>
              <p className = 'title'>{note.title}</p>
              <p>{note.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
