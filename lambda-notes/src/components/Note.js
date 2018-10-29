import React from 'react';

const Note = props => {
  console.log('in note', props.note)

  if (!props.note) {
    return (
      <h1>Loading note...</h1>
    )
  }
  return (
    <div className='note-container'>
      <div className='note-buttons'>
        <div className='button2 edit-button'>edit</div>
        <div className='button2 delete-button'>delete</div>
      </div>
      <div className='note'>
        <h2>{props.note.title}</h2>
        <p>{props.note.textBody}</p>
      </div>
    </div>
  )
}

export default Note;
