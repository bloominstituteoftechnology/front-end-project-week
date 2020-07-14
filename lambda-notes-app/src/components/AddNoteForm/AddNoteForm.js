import React from 'react';
import './AddNoteForm.css';

export const AddNoteForm = props => {

  const handleSubmit = event => {
    event.preventDefault();
    
    if (props.isUpdating) {
      props.handleUpdateNote()
    } else {
      props.handleAddNewNote(event);
    }
  }

  return (
    <div className='add-a-note-form'>
    <h1 className='add-a-note-header'>Create New Note:</h1>
      <form>
        <input
          className='title-input'
          type='text'
          value={props.note.title}
          name='title'
          onChange={props.handleInput}
          placeholder='Note Title'
        />

        <textarea  
          className='note-body-input'        
          value={props.note.textBody}
          name='textBody'          
          placeholder='Note Content'
          rows='50'
          cols='70'
          onChange={props.handleInput}
        />

        <button className='save-button' onClick={handleSubmit}>Save</button>


      </form>
    </div>
  )
}