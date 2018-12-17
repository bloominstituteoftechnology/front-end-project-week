import React from 'react';

const Note = props => {
  return(
    <div>
      <h5>{props.note.title}</h5>
      <p>{props.note.textBody}</p>
    </div>)
};

export default Note;
