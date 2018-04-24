import React, { Component } from 'react';

import '../styles/TodoForm.css';

export class TodoForm extends Component {
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
      <div className="TodoForm">
        <p className="TodoForm_header">Placeholder</p>
        <form className="TodoForm_inputs">
          <input
            className="TodoForm_inputTitle"
            placeholder="Title"

          />
          <textarea
            className="TodoForm_inputBody"
            placeholder="Write your note here..."
          />
        </form>
        <button className="App_button">Save</button>
      </div>
    )
  }
}