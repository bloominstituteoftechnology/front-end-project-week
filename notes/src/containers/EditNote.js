// should be very similar to AddNote, except we want to pass the note title and content
// and display that information in the input field by default
// we need to dispatch editNote function. Need to retain the id - use { match }?

import React from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions/notes';
// import EditingNote from '../components/EditingNote';

const getNote = (notes, { match }) => {
  console.log(notes[match.params.id]);
  return notes[match.params.id];
}

const mapStateToProps = (state, { match }) => ({
  note: getNote(state.notes, { match })
});

// const EditNote = ({ dispatch }, note) => {
const EditNote = (note, { dispatch }) => {
  console.log(note.note);
  let title
  let content 
  return (
    <div className='noteForm'>
      <h3>Edit Note:</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!title.value.trim() || !content.value.trim()) {
            return
          }
          dispatch(editNote(title.value, content.value))
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

export default connect(
  mapStateToProps,
)(EditNote)

// Object.assign({}, note, {
//   title: action.title,
//   content: action.content
// });