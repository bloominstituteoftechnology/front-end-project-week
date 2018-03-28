import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';

const AddNote = ({ dispatch }) => {
  let title
  let content 

  return (
    <div>
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
        <input ref={node => title = node} />
        <input ref={node => content = node} />
        <button type="submit">
          Add Note
        </button>
      </form>
    </div>
  )
}

export default connect()(AddNote)