import React from 'react';

const AddNoteForm = props => {
  console.log('add note form', props)
  return (
    <form onSubmit={props.clickHandler} className='form'>
      <h3 className='add-header'>Create New Note:</h3>
      <input 
        className='title'
        type='text'
        name='title' 
        value={props.data.title}
        placeholder='Note Title'
        onChange={props.inputChange}/>
      <input 
        className='body'
        type='text'
        name='textBody' 
        value={props.data.textBody}
        placeholder='Note Content'
        onChange={props.inputChange}/>
      <button className='save' onClick={props.clickHandler}>Save</button>
    </form> 
  );
}

export default AddNoteForm;
