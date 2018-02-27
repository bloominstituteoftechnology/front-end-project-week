import React from 'react';

const Note = props => {
  return (
    <div className="note__container">
      <div className="note__title">
        {props.note.title}
      </div>
      <div className="note__content">
        {props.note.content}
      </div>
    </div>
  )

};

export default Note;