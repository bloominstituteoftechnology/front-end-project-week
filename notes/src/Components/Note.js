import React from 'react';

const Note = props {
  return (
    <div className="note-list--note" key={props._id}>
      <h4>{props.title}</h4>
      <p>{props.textBody}</p>
    </div>
  )
}
