import React from 'react';

const AddNote = (props) => {

  const submitHandler = e => {
    props.submitHandler(e);
    props.history.push('/');
  }

  return (
    <div className='add-note'>
      <h4>Create Note</h4>
      <form onSubmit={submitHandler}>
        <input className='title' name='title' placeholder='Title' value={props.state.title} onChange={props.changeHandler} />
        <textarea className='text' name='text' placeholder='Enter your note' value={props.state.text} onChange={props.changeHandler} />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}

export default AddNote;
