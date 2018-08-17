import React from 'react';


const Note = ({ note }) => (
  <div>
    <h1>{note.title}</h1>
    <p>{note.textBody}</p>
  </div>
);

export default Note;