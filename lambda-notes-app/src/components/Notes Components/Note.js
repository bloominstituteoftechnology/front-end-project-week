import React from 'react';

const Note = props => {
  return (
    <div className='Note'>
      <h3>{props.title}</h3>
      <p>{props.noteBody}</p>
    </div>
  )
}

export default Note;