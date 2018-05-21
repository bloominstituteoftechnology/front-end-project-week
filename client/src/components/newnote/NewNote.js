import React from 'react';

// components
import TextField from '../misc/TextField';
import Button from '../misc/Button';

const NewNote = props => {
  return (
    <div className='new-note-wrapper'>
      <div>
        <h2>Create New Note</h2>
      </div>

      <form className='new-note-wrapper__form' onSubmit={ e => e.preventDefault() } >
        <div>
          <TextField
            variant='input'
            inputName='title'
            inputType='text'
            inputVal={ props.title }
            inputOnChange={ props.setInputVal }
          />
        </div>

        <div>
          <TextField
            textareaName='content'
            textareaContent={ props.content }
            textareaOnChange={ props.setInputVal }
          />
        </div>

        <div className='form__submit-wrapper'>
          <Button
            buttonClassName='submit-wrapper__submit-button'
            buttonContent='Save'
            buttonType='submit'
            buttonOnClick={ props.buttonOnClick }
          />
        </div>
      </form>
    </div>
  )
}
 
export default NewNote;