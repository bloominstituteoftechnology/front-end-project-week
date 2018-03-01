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
    if(this.state.title === "" || this.state.content === "") return;
    this.props.addNote(this.state);
    this.setState({
      title: "",
      content: ""
    });
  };

  render() {
    return (
      <form className="createNote">
        <h1>Create New Note:</h1>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={this.title}
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="content"
          placeholder="Note Content"
          value={this.content}
          onChange={this.handleInput}
        />
        <button onClick={this.handleSubmit}>Save</button>
      </form>
    );
  }
}

export default CreateNote;
