import React from 'react';

const EditForm = props => {
  return (
    <form onSubmit={()=>{}} className='form'>
      <h3 className='add-header'>Edit Note:</h3>
      <input 
        className='title'
        type='text'
        name='noteTitle' 
        value={props.data.title}
        placeholder='Note Title'
        onChange={()=>{}}></input>
      <input 
        className='body'
        type='text'
        name='noteContent' 
        value={props.data.textBody}
        placeholder='Note Content'
        onChange={()=>{}}>
      </input>
      <button className='save' onClick={console.log(props)}>Submit</button>
  </form>
  );
}

export default EditForm;