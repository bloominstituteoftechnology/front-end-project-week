import React from 'react';

const Note = props => {
  return (
    <div>
      <p>{props.title}</p> <br />
      <p>{props.body}</p> <br />
    </div>
  );
}

export default Note;
