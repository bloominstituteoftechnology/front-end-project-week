import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NoteList.css';
import { NoteCard } from './NoteCard';

export const NoteList = props => {
  return (
    <div className="NoteList">
      <h4>Your Notes:</h4>
      {props.notes.length ? props.notes.map(note => (
        <NoteCard key={note.id} note={note} />
      )) : null}
      <div className="createCard">
        <Link to="/create">+</Link>
      </div>
    </div>
  )
}