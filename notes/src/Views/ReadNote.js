import React from 'react';

function ReadNote(note) {
  console.log(note);
  const noteTitle = `${note.title}`;
  console.log(noteTitle);
  return (
    <div>
      <h1>{noteTitle}</h1>
      <p>{note.textBody}</p>
    </div>
  );
}

export default ReadNote;