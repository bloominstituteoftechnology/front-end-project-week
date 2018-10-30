import React from 'react';
import './NoteView.css'

export const NoteView = props => {
  // const { id } = props;
  console.log('passed props', props);
  const urlParam = (new URL(document.location)).searchParams.get('id');
  const note = props.notes.find(note => note._id == urlParam); 
  console.log('note', note)
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
        'textAlign': 'left',
        'marginLeft': '2%'
      }}>{note.title}</h2>
      <div className="note-text-body">
        {note.textBody}
      </div>
    </div>
    )
  }
}