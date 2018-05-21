import React from 'react';
import './notelist.css';
import NoteCard from './notecard.js';

const NoteList = (props) => {
  return (
    <div className="notes-view">
      <div className="heading">
        <h5>Your Notes:</h5>
      </div>
      <div className="note-cards">
        {
          props.notes.map((note, index) => {
            return (
              <NoteCard key={index} note={note} />
            );
          })
        }
      </div>
    </div>
  );
}

export default NoteList;
