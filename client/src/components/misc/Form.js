import React from 'react';

import TextField from '../misc/TextField';
import Button from '../misc/Button';

const Form = props => {
  return (
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
          textareaOnChange={ props.setTextAreaVal }
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
  )
}
 
export default Form;