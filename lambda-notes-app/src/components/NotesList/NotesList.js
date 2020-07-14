import React from 'react';
import './NotesList.css';

export const NotesList = props => {
  return (
    <div className='notes-list-wrap'>
      <h4>Your Notes:</h4>
      <div className='notes-map'>
      {props.notes.map(note => (
        <div className='note-box' key={note._id}>
          <h3 className='note-title'onClick={() => props.history.push(`/notes/${note._id}`)}>
            {note.title}
          </h3>
          <p className='note-body'>{note.textBody}</p>
        </div>      
      ))}
      </div>
    </div>
  )
};

