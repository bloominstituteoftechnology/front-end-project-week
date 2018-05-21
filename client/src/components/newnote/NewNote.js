import React from 'react';

// components
import Form from '../misc/Form';

const NewNote = props => {
  return (
    <div className='new-note-wrapper'>
      <div>
        <h2>Create New Note</h2>
      </div>

      <Form
        setInputVal={ props.setInputVal }
        title={ props.title }
        content={ props.content }
        buttonOnClick={ props.buttonOnClick }
      />
    </div>
  )
}
 
export default NewNote;