import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NoteCard.css';

export const NoteCard = props => {
  return (
    <Link to={`/view/${props.note.id}`} className="NoteCard">
        <p className="NoteCard_title">{props.note.title}</p>
        <p className="NoteCard_body">{props.note.body}</p>
    </Link>
  )
}