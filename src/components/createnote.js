import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
      title: "",
      body: "",
      noteCreated: false
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

    axios
      .post("https://robs-back-end-project.herokuapp.com/api/notes", note)
      .then(res => {
        this.setState({ title: "", body: "", noteCreated:true });
      })
      .catch(() => alert("Error adding note"));
  };

  render() {
    if (this.state.noteCreated) {
      this.props.getNotes();
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1 className="header">Create New Note:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            placeholder="Note Title"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <input
            className="text"
            required
            placeholder="Note Text"
            name="body"
            value={this.state.body}
            onChange={this.handleInput}
          />
          <button>Create Note</button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
