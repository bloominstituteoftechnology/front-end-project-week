import React, { Component } from "react";

import "./CreateView.css";

class CreateView extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      notes: []
    };
  }

  noteHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNewNote = e => {
    e.preventDefault();
    const { notes } = this.state;
    const myNotes = {
      title: this.state.title,
      content: this.state.content
    };
    notes.push(myNotes);
    this.setState({ notes, myNotes: "" });
  };

  render() {
    return (
      <div className="new-container">
        <h5 className="create-header">Create New Note: </h5>
        <form className="note-form" onSubmit={this.submitNewNote}>
          <div>
            <input
              type="text"
              placeholder="Note Title"
              name="title"
              value={this.state.title}
              onChange={this.noteHandler}
              className="title-input"
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Note Content"
              name="content"
              value={this.state.content}
              onChange={this.noteHandler}
              className="content-input"
            />
          </div>
          <div>
            <button
              type="submit"
              //   onSubmit={this.submitNewNote}
              className="save-button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateView;
