import React from 'react';

const Note = props => {
  return (
    <React.Fragment>
      <h3>{props.note.tags}</h3>
      <strong>{props.note.title}</strong>
      <p>{props.note.textBody}</p>
    </React.Fragment>
  );
};

Note.defaultProps = {
  tags: '',
  title: '',
  textBody: ''
};

export default Note;

