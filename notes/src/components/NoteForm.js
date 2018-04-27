import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NoteForm.css';
import { ErrorPage } from './ErrorPage';

export class NoteForm extends Component {
  constructor(props) {
    super(props);
    // Change state and input depending on function of form
    const id = props.match.params.id;
    if (props.formUse === 'Create New Note') {
      this.state = { title: '', body: '' , id: props.notes.length };
    } else if (props.formUse === 'Edit Note' && props.notes[id]) {
      this.note = props.notes[id];
      this.state = {
        title: this.note.title,
        body: this.note.body,
        id: Number(id)
      } // Show error page if there is no note with id specified
    } else this.state = null;
  }

  componentDidMount() {
    // Make sure to resize inputs on load
    this.resizeInputs();
  }

  handleInput = e => {
    // Link input to state and resize if needed
    this.setState({ [e.target.name]: e.target.value });
    this.resizeInputs();
  }

  fillEmpty(value) {
    return (typeof value === "string" && !value) ? "..." : value;
  }

  resetInput() {
    this.setState({ title: '', body: '' });
  }

  resizeInputs() {
    // Adjust height of textareas
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.style.height = "1px";
      textarea.style.height = (3+textarea.scrollHeight)+"px";
    })
  }

  render() {
    return( this.state ?
      <div className="NoteForm">
        <p className="NoteForm_header">{this.props.formUse}:</p>
        <form className="NoteForm_inputs">
          <textarea
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
        <Link to="/" className="App_button NoteForm_button" 
          onClick={() => { // Maintain immutability and fill empty values
            const newTodo = Object.assign({}, this.state, {
              title: this.fillEmpty(this.state.title),
              body: this.fillEmpty(this.state.body)
            }); // Call function based on form use
            this.props.useFunction(newTodo, this.state.id);
        }}>Save</Link>
      {/* Show ErrorPage if any of the constructor conditions are not met */}
      </div> : <ErrorPage />
    )
  }
}