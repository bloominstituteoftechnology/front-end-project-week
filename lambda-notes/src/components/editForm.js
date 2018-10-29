import React from 'react';

const EditForm = () => {
  return (
    <form onSubmit={()=>{}} className='form'>
      <h3 className='add-header'>Edit Note:</h3>
      <input 
        type='text'
        name='noteTitle' 
        value='candy'
        placeholder='Note Title'
        onChange={()=>{}}></input>
      <input 
        type='text'
        name='noteContent' 
        value='candy'
        placeholder='Note Content'
        onChange={()=>{}}>
      </input>
      <button onClick={()=>{}}>Submit</button>
  </form>
  );
}

export default EditForm;