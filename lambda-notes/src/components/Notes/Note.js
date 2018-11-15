import React from 'react';

const Note = props => {
  return (
    <div key={props.note._id}>
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
