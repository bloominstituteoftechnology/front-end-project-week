import React from 'react';
import { Link } from 'react-router-dom';

export const SingleNote = ({ _id }) => {
  return (
    <Link to={`/${note._id}`}>
      <div>
        <button>edit</button>
        <Link to="/" onClick={() => props.handleDeleteNote(_id)}>
          delete
        </Link>
        <div>{props.note.title}</div>
        <div>{props.note.textBody}</div>
      </div>
    </Link>
  );
};
