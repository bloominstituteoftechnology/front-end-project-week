import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../Actions/Notes.js';

const AddNote = ({ dispatch }) => {
  let title
  let content 

  return (
    <div className='note'>
      <h3>Make New Note</h3>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!title.value || !content.value) {
            return
          }
          dispatch(addNote(title.value, content.value))
          title.value = ''
          content.value = ''
        }}
      >
        <input ref={node => title = node} placeholder='Note Title' className='noteTitle'/><br/>
        <input ref={node => content = node} placeholder='Note Content' className='noteContent'/><br/>
        <button type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default connect()(AddNote)