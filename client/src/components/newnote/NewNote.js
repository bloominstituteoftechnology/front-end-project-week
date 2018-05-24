import React from 'react';

// components
import Form from '../misc/Form';

// style
import './NewNote.css';

const NewNote = props => {
  const { buttonOnClick, setInputVal, setTextAreaVal, title, content } = props;
  
  return (
    <div className='new-note-wrapper'>
      <div className='new-note-wrapper__title-wrapper'>
        <h2 className='title-wrapper__h2'>Create New Note</h2>
      </div>

      <Form
        buttonClassName='submit-wrapper__submit-newnote button'
        buttonContent='Save'
        buttonOnClick={ e => buttonOnClick(e, props) }
        formClassName='new-note-wrapper__form'
        inputClassName='form__input-title'
        textareaClassName='form__input-textarea'
        setInputVal={ setInputVal }
        setTextAreaVal={ setTextAreaVal }
        title={ title }
        content={ content }
      />
    </div>
  )
}
 
export default NewNote;