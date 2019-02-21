import React from 'react';
import Note from './NoteCard';

const Notes = props => {
  return (
    <div>
      <h1>Lambda Notes:</h1>
      <div>
        {props.notes.map(note => {
          return (
            <div key={note.id}>
              <Note title={note.title} textBody={note.textBody} id={note._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
