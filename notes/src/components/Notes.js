import React from 'react';

import Note from './Note';

const Notes = props => {
  const { notes } = props;
  return (
    <div className="notes">
      {notes.map(note => (
        <Note note={note} />
      ))}
    </div>
  );
};

export default Notes;
