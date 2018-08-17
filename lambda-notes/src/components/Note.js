import React, { Fragment } from 'react';

const Note = ({ note }) => (
  <Fragment>
    <h1>{note.title}</h1>
    <p>{note.textBody}</p>
  </Fragment>
);

export default Note;