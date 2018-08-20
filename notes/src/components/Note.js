import React from 'react';

const Note = ({ note }) => (
  <div className="note">
    {note.title} (id: {note.id})
    <hr />
    {note.text}
  </div>
);

export default Note;