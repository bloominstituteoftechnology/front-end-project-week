import React from 'react';

import TextField from '../misc/TextField';
import Button from '../misc/Button';

const Form = props => {
  return (
    <form className={ props.formClassName }>
      <div>
        <TextField
          variant='input'
          inputClassName={ props.inputClassName }
          inputName='title'
          inputType='text'
          inputVal={ props.title }
          inputOnChange={ props.setInputVal }
        />
      </div>

      <div>
        <TextField
          textareaClassName={ props.textareaClassName }
          textareaContent={ props.content }
          textareaName='content'
          textareaOnChange={ props.setTextAreaVal }
        />
      </div>

      <div className='form__submit-wrapper'>
        <Button
          buttonClassName={ props.buttonClassName }
          buttonContent={ props.buttonContent }
          buttonType='submit'
          buttonOnClick={ props.buttonOnClick }
        />
      </div>
    </form>
  )
}
 
export default Form;