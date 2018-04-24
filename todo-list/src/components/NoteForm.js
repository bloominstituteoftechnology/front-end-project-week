import React, { Component } from 'react';

import '../styles/NoteForm.css';

export class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  handleInput = e => {

  }

  render() {
    return(
      <div className="NoteForm">
        <p className="NoteForm_header">{this.props.formUse}:</p>
        <form className="NoteForm_inputs">
          <input
            className="NoteForm_inputTitle"
            placeholder="Title"
          />
          <textarea
            className="NoteForm_inputBody"
            placeholder="Write your note here..."
          />
        </form>
        <button className="App_button">Save</button>
      </div>
    )
  }
}