import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../store/actions";

class AddNoteForm extends Component {
  state = {
    title: "",
    textBody: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title && this.state.textBody) {
      addNote(this.state);
      this.setState({
        title: "",
        textBody: ""
      });
    }
    return null;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          placeholder="Note Title"
          onChange={this.handleInputChange}
          name="title"
        />
        <textarea
          placeholder="Note Content"
          onChange={this.handleInputChange}
          name="textBody"
        />
        <button>Save</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addNote }
)(AddNoteForm);
