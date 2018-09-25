// In here will be your view when you click on the actual note itself

/*
  - It will have <Link to .... > for the edit and delete 
    + In this file should be the textBody corresponding with the note you clicked and the title
*/

import React from 'react';

export const Note = props => {

  const note = props.notesList.find(
    note => note.id === parseInt(props.match.params.noteId, 10)
  );

  const handleDelete = () => {
    props.handleDeleteNote(note.id);
    props.history.push('/notes');
  }

  return (
    <div className='single-note-wrap'>
      <nav>
        <button onClick={event => {
          event.preventDefault();
          props.goToUpdateNoteForm(event, note.id);
        }}
        />
        <button onClick={handleDelete}>delete</button>
      </nav>      
      <h3>{note.title}</h3>
      <p>{note.textBody}</p>
    </div>
  )
}