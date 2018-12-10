import React, { Component } from "react";

import "./NoteForm.css";

class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
        name: "",
        text: ""
    };
  }

  render() {
    return (
      <div className="note-form-container">
        <h2>Create New Note:</h2>
        <form>
            <input
                name="name"
                value={this.state.name}
                placeholder="Note Title"
                className="name-input"
            />
            <textarea 
                name="text"
                value={this.state.text}
                placeholder="Note Content"
                className="content-textarea"
            />
            <div className="btn">Save</div>
        </form>
      </div>
    );
  }
}

export default NoteForm;
