import React from 'react';
import Notes from './Notes.js';
 import { Route, Redirect } from 'react-router';

const NotesList = ({ notes }) => (
  <div className='noteslist'>
  <h1>Notes</h1>
    {notes.map(note =>
      <Notes
        key={note.id}
        {...note}
        onClick={() => console.log(note.id, {...note})}
      />
    )}
  </div>
);

export default NotesList;