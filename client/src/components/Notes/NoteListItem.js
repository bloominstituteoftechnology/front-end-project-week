import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NoteListItem = ({ title, textBody, _id }) => {
  return (
    <Fragment>
      <Link to={`/note/get/${_id}`}>
        <h2>{title}</h2>
      </Link>
      {textBody}
    </Fragment>
  );
};

export default NoteListItem;
