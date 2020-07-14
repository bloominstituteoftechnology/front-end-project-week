import React, { Component } from 'react';

function NoteForm (props) {
  return(
    <div className="new-note">
      <form
        className='note-form'
        onSubmit={props.handleSubmit}
        name='new-note-form'
        >
        <input
          className='input-title'
          type='text'
          name='title'
          value={props.state.title}
          placeholder='Note Title'
          onChange={props.handleChange}
          ></input>
          <textarea
            className='input-textBody'
            type='textarea'
            name='content'
            value={props.state.content}
            placeholder='Note Content'
            onChange={props.handleChange}
            ></textarea>
          <button
            className='nav-link'
            type="submit"
            // onClick={document.forms['new-note-form'].submit()}
            > Save</button>
      </form>
    </div>)
}

export default NoteForm
