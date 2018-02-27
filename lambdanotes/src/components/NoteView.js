import React from 'react';

const NoteView = note => {
  console.log(note);
  return (
    <div>
      <h2>{note.title}</h2>
      <br />
      <p>{note.body}</p>
    </div>
  );
};

export default NoteView;
