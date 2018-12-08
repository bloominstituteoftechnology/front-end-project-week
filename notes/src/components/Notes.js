import React from 'react';

const Notes = props => {
  return (
    <div>
      <h2 style={{display: 'inline'}}>notes component</h2>
      {props.notes.map(note => (
        <div>
          <h2>{note.title}</h2>
          <h3>{note.textBody}</h3>
        </div>
      ))}
    </div>
  );
};

export default Notes;
