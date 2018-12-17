import React, { Component } from "react";

class AddNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteBody: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  helper = e => {
    this.props.addNote(e, this.state);
    this.setState({ noteTitle: "", noteBody: "" });
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    return (
      <div className="new-note-container">
        <div className="notes-header">
          <h3>Create New Note:</h3>
        </div>
        <form onSubmit={this.helper}>
          <input
            className="form-note-title"
            name="noteTitle"
            value={this.state.noteTitle}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Title"
          />
          <textarea
            className="form-note-content"
            name="noteBody"
            value={this.state.noteBody}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Content"
          />
          <button className="form-button">Save</button>
        </form>
      </div>
    );
  }
}

export default AddNoteForm;
