import React from 'react';

function ReadNote(note) {
  return (
    <div className='full-page-note'>
      <h1>{note.title}</h1>
      <p>{note.textBody}</p>
    </div>
  );
}

export default ReadNote;