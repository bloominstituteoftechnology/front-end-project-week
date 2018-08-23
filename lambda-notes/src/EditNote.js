import React from 'react';

const EditNote = (props) => {
  const id = props.match.params.id;
  const note = props.state.notes.find(note => {
    return note._id === id;
  });
  console.log('textBody ', props.state.textBody);

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
        <textarea className='text' name='textBody' placeholder='Enter your note' value={props.state.textBody.length > 0 ? props.state.textBody : note.textBody} onChange={props.changeHandler} />
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

export default EditNote;
