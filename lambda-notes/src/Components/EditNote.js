import React from 'react';

const EditNote = props => {
  const note = props.notes.find(note => props.match.params.id === `${note._id}`);
  const editNotes = event => {
    event.preventDefualt();
    props.editNote(note._id);
    props.history.push(`/note/${note._id}`);
  }

  return(
    <form className='form'>
      <h2>Edit Note</h2>
      <input
        type='text'
        name='newTitle'
        placeholder='Title'
        onChange={props.changeHandler}
        value={props.newTitle}
      />
      <textarea
        name='newTextBody'
        id=''
        placeholder='Content'
        onChange={props.changeHandler}
        value={props.newTextBody}
      />
      <button onClick={editNotes}>Update</button>
    </form>
  )
}

export default EditNote;