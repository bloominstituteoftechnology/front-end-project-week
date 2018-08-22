import React from 'react';
import '../../index.css';

import { Link } from 'react-router-dom';


const Note = props => {
  return (
    <Link className="article-note__linked" to={`/notes/${props.id}`}>
      <h3>{props.title}</h3>
      <hr className="underline" />
      <p>{props.description}</p>
    </Link>
  );
}

export default Note;
