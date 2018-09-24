import React from 'react';


const CreateNote = props => {  

  return (
    <div className='create-note'>
      {/* side bar goes here */}
      <form onSubmit={props.addNote}>
        <input 
          name='title'
          type='text' 
          placeholder='Note Title'
          onChange={props.handleTextInput}
        />
        <textarea
          name='noteBody'
          rows='40'
          cols='60'
          placeholder='Note Content'
          onChange={props.handleTextInput}
        />

        <button type='submit' onClick={props.addNote}>Save</button>
      </form>
      
    </div>
  )
}


export default CreateNote;