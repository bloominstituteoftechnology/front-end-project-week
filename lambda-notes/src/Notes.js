import React from 'react';
import Note from './Note';

const Notes = props => {
  return (
    <div>
      <h1 class="notes">Notes:</h1>
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