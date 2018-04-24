import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NoteCreate.css";

class NoteCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.getID(),
      title: "",
      content: "",
      create: this.props.create
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSave = () => {
    const note = {
      id: this.state.id,
      title: this.state.title === "" ? this.state.id.toString() : this.state.title,
      content: this.state.content
    };
    this.state.create(note);
  };

  render() {
    return (
      <div className="NoteCreate-container">
        <h3 className="NoteCreate-header">Create New Note:</h3>
        <input
          className="NoteCreate-input-title"
          type="text"
          placeholder="Note Title"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <textarea
          className="NoteCreate-input-content"
          type="text"
          placeholder="Note Content"
          name="content"
          value={this.state.content}
          onChange={this.onChange}
        />
        <Link onClick={this.onSave} className="NoteCreate-link" to="/notes">
          <div onClick={this.onSave} className="NoteCreate-update-btn">
            Save
          </div>
        </Link>
      </div>
    );
  }
}

export default NoteCreate;
