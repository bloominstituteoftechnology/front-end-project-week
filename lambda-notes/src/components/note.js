import React from 'react';

const Note = props => {
  return(
    <div className="note-container">
      <h2>{props.title}</h2>
      <div className="body-container">
        <p className="text-body">
          {props.body}
        </p>
      </div>
    </div>
  )
}

export default Note;