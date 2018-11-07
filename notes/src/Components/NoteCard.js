import React from 'react';
import { Link } from 'react-router-dom';

function NoteCard(props) {
  //const { props.title, props.textBody, id } = note;
  return (
    <div>

      <Link to={`/notes/${props.note._id}`}>
        <h2>{props.note.title}</h2>
      </Link>
      <p>{props.note.textBody}</p>

    
    </div>
  );
}

export default NoteCard;