import React, { Component } from "react";
import axios from "axios";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: {
        tags: [],
        textBody: "",
        title: ""
      }
    };
  }
  handleNoteFormChange = e => {
    this.setState({
      newNote: {
        ...this.state.newNote,
        [e.target.name]: e.target.value
      }
    });
  };

  addNewNote = e => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", this.state.newNote)
      .then(this.props.handleAddNewNote());

    this.props.history.push("/");
  };
  render() {
    return (
      <div className="note-form">
        <h1>Create New Note:</h1>
        <form onSubmit={this.addNewNote}>
          <input
            type="text"
            placeholder="Note Title"
            value={this.state.newNote.title}
            onChange={this.handleNoteFormChange}
            name="title"
          />
          <textarea
            name="textBody"
            id="text-body"
            cols="30"
            rows="10"
            onChange={this.handleNoteFormChange}
            value={this.state.newNote.textBody}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default NoteForm;
