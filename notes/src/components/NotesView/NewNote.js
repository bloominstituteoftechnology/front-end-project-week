import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./newnote.css";

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      tags: ""
    };
  }

  editInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editTags = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNoteHandler = e => {
    this.props.addNote(this.state);
  };

  render() {
    console.log("New Note Page rendered");
    return (
      <div className="new-note-view">
        <h2>Create New Note:</h2>
        <form>
          <input
            className="title-input"
            name="title"
            placeholder="Note Title"
            onChange={this.editInput}
          />
          <textarea
            name="content"
            placeholder="Note Content"
            rows="21"
            onChange={this.editInput}
          />
          <input
            className="tag-input"
            name="tags"
            placeholder="Note Tags (Separated by ',')"
            onChange={this.editTags}
          />
          <Link className="btn" to="/" onClick={this.addNoteHandler}>
            Save
          </Link>
        </form>
      </div>
    );
  }
}

export default NewNote;
