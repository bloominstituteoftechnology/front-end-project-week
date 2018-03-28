import React from 'react';

const Note = ({ onClick, title, content }) => (
  <div
    onClick={onClick}
    >
      <p>{title}</p>
      <p>{content}</p>
    </div>
)

export default Note;