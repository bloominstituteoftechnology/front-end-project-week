import React from 'react';
import { Link } from 'react-router-dom';

const SingleNote = props => {
  return (
    <div>
      <div>
        <Link to={`/edit/${props.note._id}`}>Edit</Link>
        <button type="button" onClick={(e) => props.deleteNote(e, props.note._id)}>Delete</button>
      </div>

      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </div>
  );
}

export default SingleNote;
