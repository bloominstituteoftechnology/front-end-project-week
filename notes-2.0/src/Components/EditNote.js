import React, { Component } from "react";

export default class EditNote extends Component {
  state = {
    title: this.props.note.title,
    content: this.props.note.content
  };

  render() {
    return (
      <form onSubmit={this.handleUpdate} className="editNote">
        <h1 className="header">Edit Note:</h1>
        <input
          type="text"
          name="title"
          className="noteTitle"
          value={this.state.title}
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="content"
          className="noteContent"
          value={this.state.content}
          onChange={this.handleInput}
        />
        <button className="save" type="onSubmit">
          Update
        </button>
      </form>
    );
  }
  handleUpdate = e => {
    e.preventDefault();
    if (this.state.title === "" || this.state.content === "") return;
    this.props.updateNote(this.state);
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}
