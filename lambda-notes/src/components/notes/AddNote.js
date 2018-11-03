import React, { Component } from "react";
import "./Notes.css";

// import { compose } from "redux";
// import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { quillModules, quillFormats } from "../../helpers/quillEditor";
class AddNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
      userID: localStorage.getItem("userID")
    };
  }

  handleTextBodyChange = e => {
    this.setState({
      textBody: e
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
            onChange={e => this.setState({ title: e.target.value })}
            name="title"
            required
            minLength="2"
            value={this.state.title}
            maxLength="100"
          />
          <ReactQuill
            modules={quillModules}
            formats={quillFormats}
            id="create-note-body"
            cols="30"
            rows="20"
            onChange={this.handleTextBodyChange}
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
