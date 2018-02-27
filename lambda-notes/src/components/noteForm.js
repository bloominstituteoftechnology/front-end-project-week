import React, { Component } from "react";

class NoteForm extends Component {
  state = {
    title: "",
    text: ""
  };

  render() {
    return (
      <div>
        <h3 className="heading">Create New Note:</h3>
        <form onSubmit={this.createNote}>
          <input
            type="text"
            placeholder="Note Title"
            onChange={this.updateNote}
            name="title"
            value={this.state.title}
          />
          <input
            type="text"
            placeholder="Note Content"
            onChange={this.updateNote}
            name="text"
            value={this.state.text}
          />
          <button className="button button--teal" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }

  updateNote = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  createNote = event => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      text: this.state.text
    };

    const newNotes = [...this.state.notes, newNote];
    this.setState({ notes: newNotes, title: "", text: "" });
  };
}

export default NoteForm;
