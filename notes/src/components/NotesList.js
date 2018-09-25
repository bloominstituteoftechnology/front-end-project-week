import React, { Component } from 'react';

const NotesList = props => {
  return (
    <div className = 'note-container'>
      <h2>Notes:</h2>
      <div className = 'notes'>
        {props.notes.map(note => (
          <div className = 'note-single'>
            <p className = 'title'>{note.title}</p>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
