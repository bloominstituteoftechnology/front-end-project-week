import React from 'react';

export default function Note({ note }) {
  return (
    <div className='note'>
      <p>
        <span>{note.title}</span>
      </p>
      <p>{note.body}</p>
    </div>
  );
}