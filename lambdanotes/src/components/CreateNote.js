import React, { Component } from "react";
import { Button } from "reactstrap";

import "./CreateNote.css";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditNote = () => {
    const editedNote = {
      title: this.state.title,
      content: this.state.content
    };
    this.props.editNote(editedNote);
    this.setState({
      editing: !this.state.editing
    });
  };

  handleCreateNote = () => {
    const newNote = {
      title: this.state.title,
      content: this.state.content
    };
    if (this.state.title !== "" && this.state.content !== "") {
      this.props.addNote(newNote);
      this.setState({
        title: "",
        content: ""
      });
    } else {
      alert("Fill out all inputs to submit");
    }
  };

  render() {
    return (
      <div className="mt-5">
        Temporary Input Form
        <br />
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInput}
        />
        <br />
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleInput}
        />
        <br />
        <button onClick={this.handleCreateNote}>Create Note</button>
      </div>
    );
  }
}

export default CreateNote;
