import React from 'react';

function EditNoteForm(props) {

const submitHandler = ev => {
      ev.preventDefault();
      console.log(props);
      props.editNote();
      props.history.push('/');
    }

    return(
      <div className='edit-note-container'>
      <h3>Edit Note: </h3>
      <form onSubmit={submitHandler}>
        <div>
          <input
              className='title-field'
              type='text'
              name='title'
              placeholder='  Note Title'
              onChange={props.handleChange}
              value={props.note.title}
            />
        </div>
        <div>
          <textarea
            className='textBody-field'
            rows = '10'
            cols = '60'
            name = 'textBody'
            placeholder='   Note Content'
            value = {props.note.textBody}
            onChange={props.handleChange}>Note Content</textarea>
        </div>
        <div>
          <button className='edit-form-button' type='submit'>Update</button>
        </div>
      </form>
      </div>
    )
}

export default EditNoteForm;
