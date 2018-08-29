import React, { Component } from "react";

import "./CreateView.css";

class CreateView extends Component {
  constructor() {
    super();
    this.state = {
      newNote: { title: "", content: "" },
      notes: []
    };
  }

  handleAddNote = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNewNote = e => {
    e.preventDefault();
    const { notes } = this.state;
    const myNotes = { text: this.state.newNote };
    notes.push(myNotes);
    this.setState({ notes, myNotes: "" });
  };

  render() {
    return (
      <div className="new-container">
        <h5 className="create-header">Create New Note: </h5>
        <form className="note-form">
          <div>
            <input
              type="text"
              name="newNote"
              value={this.state.newNote.title}
              placeholder="Note Title"
              onChange={this.handleAddNote}
              className="title-input"
            />
          </div>
          <div>
            <textarea
              type="text"
              name="newNote"
              value={this.state.newNote.content}
              placeholder="Note Content"
              onChange={this.handleAddNote}
              className="content-input"
            />
          </div>
          <div>
            <button
              type="submit"
              className="save-button"
              onClick={this.submitNewNote.notes}
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
