import React from 'react';

const EditNote = (props) => {
  const id = props.match.params.id;
  const note = props.state.notes[id];

  const editHandler = (event) => {
    props.editHandler(event);
    event.target.reset();
    props.history.push('/');
  }

  return (
    <div className='edit-note'>
      <h4>Edit Note:</h4>
      <form id={id} onSubmit={editHandler}>
        <input className='title' name='title' placeholder='Title' value={props.state.title.length > 0 ? props.state.title : note.title} onChange={props.changeHandler} />
        <textarea className='text' name='text' placeholder='Enter your note' value={props.state.text.length > 0 ? props.state.text : note.text} onChange={props.changeHandler}>
        </textarea>
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

export default EditNote;
