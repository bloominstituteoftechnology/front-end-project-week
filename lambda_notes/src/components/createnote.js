import React, { Component } from "react";
import axios from "axios";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
      title: "",
      body: ""
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
      .post("https://fe-notes.herokuapp.com/note/create", note)
      .then(res => {
        console.log(res);
        this.setState({ title: "", body: "" });
      })
      .catch(() => alert("Error adding note"));
  };

  render() {
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
