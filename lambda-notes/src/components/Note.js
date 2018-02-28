import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  return (
    <Link className="col-md-4" key={props.id} to={`/view-note/${props.id}`}>
      <div className="note">
        <h3>{props.title}</h3>
        <hr />
        <p>{props.body}</p>
      </div>
    </Link>
  );
};

export default Note;