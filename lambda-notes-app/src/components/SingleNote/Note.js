// In here will be your view when you click on the actual note itself

/*
  - It will have <Link to .... > for the edit and delete 
    + In this file should be the textBody corresponding with the note you clicked and the title
  
  - Consider link to edit form and just make an edit form component
*/

import React from 'react';
import Popup from 'reactjs-popup';
import './Note.css';

export const Note = props => {  
  const note = props.notesList.find(
    note => note._id === props.match.params.noteId
  ); 
  console.log('i am note', note); 
  console.log(props)

  const handleDelete = () => {
    props.handleDeleteNote(note._id);
    props.history.push('/notes');
  }

  return (
    <div className='single-note-wrap'>
      <nav>
        <button className='edit-delete-button' onClick={event => {
          event.preventDefault();
          props.goToUpdateNoteForm(event, note._id);
        }}
        >edit</button>        
        <Popup trigger={<button className='edit-delete-button'>delete</button>} modal>
          {close => (
            <div className='open-modal'>
              <p className='modal-text'>Are you sure you want to delete this?</p>
              <div className='handle-modal-buttons'>
                <button className='delete-inside-modal' onClick={handleDelete}>DELETE</button>
                <button 
                className='cancel-inside-modal'
                onClick={() => {
                  console.log('modal closed?');
                  close()
                }}>
                  NO  
                </button>
              </div>              
            </div>
          )}
        </Popup>
      </nav>   
      {note ?
      <div className='note-div'>      
        <h3>{note.title}</h3> 
        <p>{note.textBody}</p>
      </div>
        
        : 
        
      <p>Loading...</p>     
     }        
    </div>
  )
}