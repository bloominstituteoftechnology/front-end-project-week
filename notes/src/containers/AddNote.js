import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';

const AddNote = ({ dispatch }) => {
  let title
  let content 

  return (
    <div className='noteForm'>
      <h3>Create New Note:</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!title.value.trim() || !content.value.trim()) {
            return
          }
          dispatch(addNote(title.value, content.value))
          title.value = ''
          content.value = ''
        }}
      >
        <input ref={node => title = node} placeholder='Note Title' className='noteTitle'/><br/>
        <input ref={node => content = node} placeholder='Note Content' className='noteContent'/><br/>
        <button type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default connect()(AddNote)