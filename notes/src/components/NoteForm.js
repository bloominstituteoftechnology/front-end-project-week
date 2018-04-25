import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NoteForm.css';

export class NoteForm extends Component {
  constructor(props) {
    super(props);

    if (props.formUse === 'Create New Note') {
      this.state = { title: '', body: '' , id: props.notes.length };
    } else {
      this.note = props.notes[props.match.params.id];
      this.state = {
        title: this.note.title,
        body: this.note.body,
        id: Number(props.match.params.id)
      }
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
        <Link to="/"><button className="App_button" 
          onClick={() => { // Maintain immutability
            const newTodo = {...this.state};
            Object.keys(newTodo).forEach(key => {
              // While replacing empty values except id's
              if (key !== 'id')
              newTodo[key] = !newTodo[key] ? 
              "..." : newTodo[key] });
            this.props.useFunction(newTodo, this.state.id);
        }}>Save</button></Link>
      </div>
    )
  }
}