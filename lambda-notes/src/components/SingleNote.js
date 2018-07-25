import React from 'react';
import { Link } from 'react-router-dom';

export const SingleNote = ({ _id }) => {
  return (
    <div>
      <button>edit</button>
      <Link
        to="https://killer-notes.herokuapp.com/note/delete/${_id}"
        onClick={() => props.handleDeleteNote(_id)}
      >
        delete
      </Link>
      <div>{props.note.title}</div>
      <div>{props.note.textBody}</div>
    </div>
  );
};
