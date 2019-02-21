import React from 'react';

import Note from './Note';

const Notes = ({ notes }) => (
  <div className="notes">
    {notes.map(note => (
      <Note note={note} key={note.id} />
    ))}
  </div>
);

export default Notes;
