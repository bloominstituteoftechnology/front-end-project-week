import React from 'react';

export const NoteCard = (props) => {
  return (
    <div>
      <h3>{props.note.title}</h3>
      <p>{props.note.note.substring(0, 80)}</p>
    </div>
  )
}
