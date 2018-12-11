import React from 'react';


const Note = props => {
  return (
    <div className="note-list--note" key={props.id}>

      <h4>{props.title}</h4>
      <p>{props.content}</p>

    </div>
  )
}

export default Note;