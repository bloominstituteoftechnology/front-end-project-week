import React, { Component } from "react";
import "./Notes.css";

// import { compose } from "redux";
// import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class AddNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: ""
    };
  }

  handleNoteFormChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewNote = e => {
    e.preventDefault();

    const newNote = this.state;

    const { firestore } = this.props;
    firestore
      .add({ collection: "notes" }, newNote)
      .then(() => this.props.history.push("/"));
  };
  render() {
    return (
      <div className="note-form">
        <h1>Create New Note:</h1>
        <form onSubmit={this.addNewNote}>
          <input
            type="text"
            placeholder="Note Title"
            onChange={this.handleNoteFormChange}
            name="title"
            required
            minLength="2"
            value={this.state.title}
          />
          <textarea
            name="textBody"
            id="create-note-body"
            cols="30"
            rows="20"
            onChange={this.handleNoteFormChange}
            placeholder="Note comment"
            required
            minLength="2"
            value={this.state.textBody}
          />
          <input type="submit" id="create-submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default firestoreConnect()(AddNote);
