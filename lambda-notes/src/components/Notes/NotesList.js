import React from 'react';

import Note from './Note';

const NotesList = props => {
  return (
    <div>
      <div>
        <h3>Your Notes:</h3>
      </div>
      <div>
        {props.notes.map(note => {
          <Note id={note.id} note={note} />
        })}
      </div>
    </div>
  );
}

export default NotesList;
