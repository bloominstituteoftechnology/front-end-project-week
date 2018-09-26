import React from 'react';


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
      <form>
        <input
          type='text'
          value={props.note.title}
          name='title'
          onChange={props.handleInput}
          placeholder='Note Title'
        />

        <input          
          value={props.note.textBody}
          name='textBody'          
          placeholder='Note Content'
          rows='50'
          cols='70'
          onChange={props.handleInput}
        />

        <button onClick={handleSubmit}>Save</button>


      </form>
    </div>
  )
}