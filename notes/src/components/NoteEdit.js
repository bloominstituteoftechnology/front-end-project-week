import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NoteEdit.css";

class NoteEdit extends Component {
  constructor(props) {
    super(props);
    const note = this.props.notes.find(x => x.id === Number(this.props.match.params.id));
    this.state = {
      id: note.id,
      title: note.title,
      content: note.content,
      edit: this.props.edit
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdate = () => {
    const note = {id: this.state.id, title: this.state.title, content: this.state.content};
    this.state.edit(note);
  }

  render() {
    return (
      <div className="NoteEdit-container">
        <h3 className="NoteEdit-header">Edit Note:</h3>
        <input
          className="NoteEdit-input-title"
          type="text"
          placeholder="Note Title"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <textarea
          className="NoteEdit-input-content"
          type="text"
          placeholder="Note Content"
          name="content"
          value={this.state.content}
          onChange={this.onChange}
        />
        <Link onClick={this.onUpdate} className="NoteEdit-link" to={`/view/${this.state.id}`}>
          <div className="NoteEdit-update-btn">Update</div>
        </Link>
      </div>
    );
  }
}

export default NoteEdit;
