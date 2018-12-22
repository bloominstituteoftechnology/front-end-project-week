import React from 'react';

function EditNoteForm(props) {

const submitHandler = ev => {
      ev.preventDefault();
      console.log(props);
      props.editNote();
      props.history.push('/');
    }

    return(
      <form onSubmit={submitHandler}>
          <input
              type='text'
              name='title'
              placeholder='Note Title'
              onChange={props.handleChange}
              value={props.note.title}
            />

            <input
              type='text'
              name='textBody'
              placeholder='Note Content'
              onChange={props.handleChange}
              value={props.note.textBody}
            />
          <button type='submit'>Update</button>
      </form>
    )
}

export default EditNoteForm;
