import React from 'react';
import Note from './Note';

const NotesList = (props) => {
  return (
    <div>
      <h1>Here be your Notes:</h1>
      {props.notes.map((note) => {
        return (
          <Note
            note={note}
            key={note.id}
          />
        );
      })}
    </div>
  );
};
export default NotesList;