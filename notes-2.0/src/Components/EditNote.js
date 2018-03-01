import React, { Component } from "react";

export default class EditNote extends Component {
  state = {
    title: this.props.note.title,
    content: this.props.note.content
  };

  render() {
    return (
      <form onSubmit={this.handleUpdate} className="editNote">
        <input
          type="text"
          name="title"
          value={this.state.title}
          className="singleNoteTitle"
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="content"
          value={this.state.content}
          className="singleNoteContent"
          onChange={this.handleInput}
        />
        <button type="onSubmit">Update</button>
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
