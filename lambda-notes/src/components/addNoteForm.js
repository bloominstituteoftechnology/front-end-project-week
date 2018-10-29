import React from 'react';

const AddNoteForm = props => {
  console.log(props.data)
  return (
    <form onSubmit={props.clickHandler} className='form'>
      <h3 className='add-header'>Create New Note:</h3>
      <input 
        type='text'
        name='noteTitle' 
        value={props.data.noteTitle}
        placeholder='Note Title'
        onChange={props.inputChange}></input>
      <input 
        type='text'
        name='noteContent' 
        value={props.data.noteContent}
        placeholder='Note Content'
        onChange={props.inputChange}>
      </input>
      <button onClick={props.clickHandler}>Submit</button>
    </form> 
  );
}

export default AddNoteForm;
