import React from 'react';

const AddNoteForm = props => {
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
      <textarea 
        className='body'
        type='text'
        name='textBody' 
        value='poo'
        placeholder='Note Content'
        onChange={props.inputChange}/>
      <button className='save'>Save</button>
    </form> 
  );
}

export default AddNoteForm;
