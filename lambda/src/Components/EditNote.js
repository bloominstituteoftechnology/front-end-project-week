import React from 'react';
import { connect } from 'react-redux';
import { editNote } from '../Actions/Notes.js';

const getNote = (notes, { match }) => {
  console.log(notes[match.params.id]);
  return notes[match.params.id];
}

const mapStateToProps = (state, { match }) => ({
  note: getNote(state.notes, { match })
});

const EditNote = (note, { dispatch }) => {
  console.log(note.note);
  let title = 0;
  let content = 0;
  return (
    <div className='noteForm'>
      <h3>Edit Note</h3>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!title.value || !content.value) {
            return
          }
          dispatch(editNote(title.value, content.value))
          title.value = ''
          content.value = ''
        }}
      >
        <input ref={node => title = node} placeholder='Title' className='Title'/><br/>
        <input ref={node => content = node} placeholder='Content' className='Content'/><br/>
        <button type="Submit">Add Note</button>
      </form>
    </div>
  )
}

export default connect(  mapStateToProps,)(EditNote)