import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
      title: '',
      body: '',
      noteAdded: false
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const note = {
      title: this.state.title,
      textBody: this.state.body
    };
    console.log(note);
    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
      .then(res => {
        console.log(res);
        this.setState({ title: '', body: '', noteAdded: true });
      })
      .catch(() => alert('Error adding note'));
  };

  render() {
    if (this.state.noteAdded) {
      this.props.getNotes();
      return <Redirect to="/" />;
    }
    return (
      <div className="pageWrapper">
        <h1>Create New Note:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            className="inputTitle"
            placeholder="Note Title"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <textarea
            required
            className="inputContent"
            placeholder="Note Content"
            name="body"
            value={this.state.body}
            onChange={this.handleInput}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
