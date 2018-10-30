import React from 'react';
import './NoteView.css'

export const NoteView = props => {
  const { id } = props.match.params;
  console.log(props.match);
  const note = props.findNote(id); 
  if (!note) {
    return (
      <div>loading</div>
    )
  } else {
    return (
    <div className="NoteView">
      <div className="controls">
        <span className="edit">edit</span>
        <span className="delete">delete</span>
      </div>
      <h2 style={{
        'text-align': 'left',
        'margin-left': '2%'
      }}>{note.title}</h2>
      <div className="note-text-body">
        {note.textBody} 
      </div>
    </div>
    )
  }
}