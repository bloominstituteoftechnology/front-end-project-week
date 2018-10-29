// React imports
import React from 'react';
// Component imports
import Note from './Note';

const NotesList = props => {
  const { notes } = props;
  return (
    <div>
      {notes.map(note => {
        return <Note note={note} key={note._id} />;
      })}
    </div>
  );
};

export default NotesList;
