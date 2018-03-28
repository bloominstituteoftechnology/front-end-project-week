import React from 'react';

const Note = ({ onClick, title, content }) => (
  <div
    onClick={onClick}
    className='noteCard'
    >
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
)

export default Note;