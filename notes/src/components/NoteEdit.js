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
      tags: note.tags,
      nextTag: "",
      edit: this.props.edit
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onTagSubmit = () => {
    const tags = this.state.tags;
    if (tags.includes(this.state.nextTag)) return;
    tags.push(this.state.nextTag);
    this.setState({ tags: tags, nextTag: "" });
  };

  onUpdate = () => {
    const note = {id: this.state.id, title: this.state.title, content: this.state.content, tags: this.state.tags};
    this.state.edit(note);
  }

  deleteTag = tag => {
    const tags = this.state.tags.filter(x => x !== tag);
    this.setState({tags: tags});
  }

  getTagLink = (tag, i) => {
    return (
      <div onClick={() => this.deleteTag(tag)} className="NoteEdit-tag-link">{tag}</div>
    );
  }

  render() {
    return (
      <div className="NoteEdit-container">
        <h3 className="NoteEdit-header">Edit Note:</h3>
        <div className="NoteEdit-input-container">
          <input
            className="NoteEdit-input-title"
            type="text"
            placeholder="Note Title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <div className="NoteEdit-tag-container">
            <div className="NoteEdit-tag-label">Tags: {this.state.tags.map((tag, i) => this.getTagLink(tag, i))}</div>
            <input
              className="NoteEdit-input-tag"
              type="text"
              placeholder="Add Tag"
              name="nextTag"
              value={this.state.nextTag}
              onChange={this.onChange}
            />
            <div onClick={this.onTagSubmit} className="NoteEdit-update-btn NoteEdit-tag-btn">Add</div>
          </div>
        </div>
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
