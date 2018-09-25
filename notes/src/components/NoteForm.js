import React, { Component } from 'react';

function NoteForm (props) {
  return(
    <div className="new-note">
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          name='title'
          value={props.state.title}
          placeholder='Note Title'
          onChange={props.handleChange}
          ></input>
          <input
            type='textarea'
            name='textBody'
            value={props.state.textBody}
            placeholder='Note Content'
            onChange={props.handleChange}
            ></input>
          <button type="submit"> Save</button>
      </form>
    </div>)
}

export default NoteForm
