import React from 'react';
import Note from './Note';

const NotesList = (props) => {
  return (
    <div>
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