import React from 'react';

export const NotesList = props => {
  return (
    <div className='notes-list-wrap'>
      {props.notesList.map(note => (
        <div className='note-box' key={note._id}>
          <h3 onClick={() => props.history.push(`/notes/${note._id}`)}>
            {note.title}
          </h3>
          <p>{note.textBody}</p>
        </div>
      ))}
    </div>
  )
};

