import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  return (
    <Link className="single-note-div" key={props.id} to={`/view-note/${props.id}`}>
      <div className="note">
        <h4>{props.title}</h4>
        <hr />
        <p>{props.text}</p>
      </div>
    </Link>
  );
};

export default Note;