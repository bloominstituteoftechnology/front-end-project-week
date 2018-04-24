import React from 'react';

import '../styles/NoteList.css';
import { NoteCard } from './NoteCard';

export const NoteList = props => {
  return (
    <div className="NoteList">
      <h4>Your Notes:</h4>
      {props.notes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
      <div className="createCard">
        <p>+</p>
      </div>
    </div>
  )
}