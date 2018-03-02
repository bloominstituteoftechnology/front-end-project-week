import React, { Component } from "react";

class CreateNote extends Component {
  state = {
    title: "",
    content: ""
  };

  handleInput = e => {
    e.preventDefault();
    return this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title === "" || this.state.content === "") return;
    this.props.addNote(this.state);
    this.setState({
      title: "",
      content: ""
    });
  };

  render() {
    return (
      <form className="editNote">
        <h1 className="header">Create New Note:</h1>
        <input
          className="noteTitle"
          type="text"
          name="title"
          placeholder="Note Title"
          value={this.title}
          onChange={this.handleInput}
        />
        <input
          className="noteContent"
          type="text"
          name="content"
          placeholder="Note Content"
          value={this.content}
          onChange={this.handleInput}
        />
        <button className="save" onClick={this.handleSubmit}>
          Save
        </button>
      </form>
    );
  }
}

export default CreateNote;
