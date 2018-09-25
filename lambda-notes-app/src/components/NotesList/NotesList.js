import React from 'react';

export const NotesList = props => {
  return (
    <div className='notes-list-wrap'>
      {props.notesList.map(note => (
        <div className='note-box'>
          <h3 onClick={() => props.history.push(`/notes/${`note.id`}/info`)}>
            {note.title}
          </h3>
          <p>{note.textBody}</p>
        </div>
      ))}
    </div>
  )
};

