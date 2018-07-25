import React from 'react';

export const SingleNote = (props) => {
  return (
    <div>
      <button>edit</button>
      <button onClick={() => props.handleDeleteNote()}>delete</button>
      <div>{props.note.title}</div>
      <div>{props.note.textBody}</div>
    </div>
  );
};
