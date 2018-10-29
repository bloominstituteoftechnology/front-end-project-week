import React from 'react';
import Note from './note'

const NotesList = props => {
  return (
    <div>
      {props.notes.map(note => {
        return (
          <Note note={note}  />
        );
      })}
    </div>
  );
}

export default NotesList;