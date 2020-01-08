import React, { Component } from "react";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import "./EditNote.css";

class EditNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
  }

  inputHandleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateNote = event => {
    event.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body,
      id: this.props.match.params.id
    };

    this.props.editNote(note);

    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    console.log("props", this.props);
    return (
      <div className="edit-container">
        <Menu />
        <div className="input-container">
          <h2>Edit Note:</h2>
          <input
            className="new-note-title"
            placeholder="Note Title"
            name="title"
            onChange={this.inputHandleChange}
            // value={this.state.title}
          />
          <textarea
            className="note-content"
            placeholder="Note Content"
            name="body"
            onChange={this.inputHandleChange}
            // value={this.state.body}
          />
          <Link to="/" className="save-button" onClick={this.updateNote}>
            Update
          </Link>
        </div>
      </div>
    );
  }
}

export default EditNote;
