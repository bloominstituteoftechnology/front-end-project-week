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
    let id = this.props.match.params.id;
    let title;
    let body;
    for (let i = 0; i < this.props.notes.length; i++) {
      if (this.props.notes[i].id == id) {
        title = this.props.notes[i].title;
        body = this.props.notes[i].body;
      }
    }


    return (
      <div className="edit-container">
        <Menu />
        <div className="input-container">
          <h2>Edit Note:</h2>
          <input
            className="new-note-title"
            placeholder={`${title}`}
            name="title"
            onChange={this.inputHandleChange}
            // value={this.state.title}
          />
          <textarea
            className="note-content"
            placeholder={`${body}`}
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
