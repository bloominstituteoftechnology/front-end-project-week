import React from 'react';

function Note(props) {
  return (
    <div>
      <h3>{props.note.title}</h3>
      <p>{props.note.description}</p>
    </div>
  )
}

export default Note;