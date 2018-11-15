import React from 'react';

const Note = props => {
  return (
    <div id={props.id}>
      <div>
        <h3>{props.note.title}</h3>
      </div>
      <div>
        {props.note.textBody}
      </div>
    </div>
  );
}

export default Note;
