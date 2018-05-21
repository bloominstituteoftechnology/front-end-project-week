import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions";

class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: ""
    };
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleAddNotes = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({title: "", content: ""});
  }

  render() {
    return (
      <div>
        <div>Note Form</div>
        <form onSubmit={this.handleAddNotes}>
          <input
            value={this.state.title}
            onChange={this.handleInput}
            placeholder="Title"
            required
            name="title"
          />
          <input
            type="textarea"
            value={this.state.content}
            onChange={this.handleInput}
            placeholder="Notes"
            required
            name="content"
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
  }

}

export default connect(null, { addNote })(NoteForm);