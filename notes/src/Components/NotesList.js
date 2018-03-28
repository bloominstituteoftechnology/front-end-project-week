import React from 'react';
import Note from './Note';

// const NotesList = ({ notes, openNote }) => (
const NotesList = ({ notes }) => (
  <div>
    {notes.map(note => 
      <Note
        key={note.id}
        {...note}
        // onClick={() => openNote(note.id)}
      />
    )}
  </div>
)

export default NotesList;