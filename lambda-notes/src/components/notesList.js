import React from 'react';
import Note from './note'

const NotesList = props => {
  return (
    <div>
      {props.notes.map(note => {
        return (
          <Note key={note.id} note={note}  />
        );
      })}
    </div>
  );
}

export default NotesList;