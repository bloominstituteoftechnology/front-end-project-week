import React from 'react';
import { Link } from 'react-router-dom';

function NoteCard({ note }) {
  const { title, textBody } = note;
  return (
    <div>

      <Link to={`Notes/${note.id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{textBody}</p>

    
    </div>
  );
}

export default NoteCard;