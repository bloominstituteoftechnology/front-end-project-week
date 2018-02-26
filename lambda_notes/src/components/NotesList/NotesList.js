import React from 'react';

const NotesList = (props) => {
  console.log('NotesList props', props)
  return (
    <div className="Note">
      <div className="Note-Title">{props.note.title}</div>
      <hr />
      <div className="Note-Content">{props.note.content}</div>
    </div>
  )
}


export default NotesList;