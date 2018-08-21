import React from 'react';

import { Link } from 'react-router-dom';


const Note = props => {
  return (
    <article>
      <Link to={`/notes/${props.id}`}>
        <div>
          {props.title}
        </div>
        <div>
          {props.description}
        </div>
      </Link>
    </article>
  );
}

export default Note;
