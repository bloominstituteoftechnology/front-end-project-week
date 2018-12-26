import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: "",
      content: ""
    };
  }

  editInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateNoteHandler = e => {
    this.props.updateNote(this.state);
  };

  render() {
    return (
      <div className="edit-note-view">
        <h2>Edit Note:</h2>
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
          <Link className="btn" to="/" onClick={this.updateNoteHandler}>
            Update
          </Link>
        </form>
      </div>
    );
  }
}

export default Edit;
