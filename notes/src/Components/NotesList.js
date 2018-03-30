import React from 'react';
import Note from './Note';
// import { Route, Redirect } from 'react-router';

const NotesList = ({ notes }) => (
  <div className='notesList'>
  <h3>Your Notes:</h3>
    {notes.map(note =>
      <Note
        key={note.id}
        {...note}
        onClick={() => console.log(note.id, {...note})}
      />
    )}
  </div>
);

export default NotesList;