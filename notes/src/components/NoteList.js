import React from 'react';
import NoteCard from './NoteCard';
import './NoteList.css';

const NoteList = props => {
  return (
    <div className="NoteList-area">
      <h2 className="NoteList-title">Your Notes:</h2>
      <div className="NoteList-container">
        {props.notes.map(note => <NoteCard {...note} />)}
      </div>
    </div>
  );
}

export default NoteList;