import React, { Component } from "react";
import axios from "axios";

class AddNoteForm extends Component {
  state = {
    title: "",
    text: ""
  };

  handleSave = () => {
    const newNote = { title: this.state.title, textBody: this.state.text };
    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, newNote)
      .then(response => {
        this.setState({ title: "",
        text: ""}, () => this.props.history.push("/"));
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log([event.target.name] + event.target.value);
  };
  render() {
    return (
      <div>
        <h1>Create New Note</h1>
        <input
          type="text"
          placeholder="Title"
          className="title-input"
          name="title"
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Type Note Here"
          className="note-input"
          name="text"
          onChange={this.handleInput}
        />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default AddNoteForm;
