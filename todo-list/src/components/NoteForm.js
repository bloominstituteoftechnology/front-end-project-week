import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.setState({ [e.target.name]: e.target.value });
  }

  resetInput() {
    this.setState({ title: '', body: '' });
  }

  render() {
    return(
      <div className="NoteForm">
        <p className="NoteForm_header">{this.props.formUse}:</p>
        <form className="NoteForm_inputs">
          <input
            className="NoteForm_inputTitle"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <textarea
            className="NoteForm_inputBody"
            placeholder="Write your note here..."
            name="body"
            value={this.state.body}
            onChange={this.handleInput}
          />
        </form>
        <Link to="/"><button className="App_button" 
          onClick={() => {
            this.props.useFunction();
        }}>Save</button></Link>
      </div>
    )
  }
}