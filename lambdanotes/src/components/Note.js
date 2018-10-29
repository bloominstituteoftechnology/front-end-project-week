import React, { Fragment } from 'react';

import './ComponentStyle.css';

const Note = props => {
  return (
    <Fragment>
      <div>Your Notes:</div>
      {props.notes.map(note => {
        return (
          <div key={note.id}>
            <div>{note.title}</div>
            <div>{note.textBody}</div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Note;
