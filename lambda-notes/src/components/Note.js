import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  return (
    <Link className="col-md-4 col-sm-6 note-link" key={props.id} to={`/view-note/${props.id}`}>
      <div className="note">
        <h4>{props.title}</h4>
        <hr />
        <p>{props.body}</p>
      </div>
    </Link>
  );
};

export default Note;