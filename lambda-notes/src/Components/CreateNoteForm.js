import React from 'react'; 

const CreateNoteForm = props => {
  return (
    <div className={'create-note'}>
      <form className={'create-note'}>
        <input 
          className='title' 
          placeholder='Note Title'/>

        <input 
          className='content'
          placeholder='Note Content' />
        <button>Save</button>
      </form>
    </div>
  )
}

export default CreateNoteForm;