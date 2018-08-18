import React, { Fragment } from "react";

const Note = ({ note }) => (
  <div>
    {note ? (
      <Fragment>
        <h1>{note.title}</h1>
        <p>{note.textBody}</p>
      </Fragment>
    ) : (
      <p> loading note...</p>
    )}
  </div>
);

export default Note;
