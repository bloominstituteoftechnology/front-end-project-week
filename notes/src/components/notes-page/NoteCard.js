import React from 'react';
import { Link } from 'react-router-dom';

export const NoteCard = (props) => {
  return (
    <Link to={`/notes/${props.note.id}`}>
      <div>
        <h3>{props.note.title}</h3>
        <p>{props.note.note.substring(0, 80)}</p>
      </div>
    </Link>
  )
}
