import React from 'react';
import Note from './Note';

const NotesList = ({ notes }) => (
  <div>
    <h3>Your Notes:</h3>
    {notes.map(note => 
      <Note
        key={note.id}
        {...note}
        // onClick={() => openNote(note.id)}
      />
    )}
  </div>
);

export default NotesList;