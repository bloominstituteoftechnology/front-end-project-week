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
      nextTag: "",
      tags: [],
      create: this.props.create
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

  onSave = () => {
    const note = {
      id: this.state.id,
      title:
        this.state.title === "" ? this.state.id.toString() : this.state.title,
      content: this.state.content,
      tags: this.state.tags
    };
    this.state.create(note);
  };

  deleteTag = tag => {
    const tags = this.state.tags.filter(x => x !== tag);
    this.setState({tags: tags});
  }

  getTagLink = (tag, i) => {
    return (
      <div onClick={() => this.deleteTag(tag)} className="NoteCreate-tag-link">{tag}</div>
    );
  }

  render() {
    return (
      <div className="NoteCreate-container">
        <h3 className="NoteCreate-header">Create New Note:</h3>
        <div className="NoteCreate-input-container">
          <input
            className="NoteCreate-input-title"
            type="text"
            placeholder="Note Title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <div className="NoteCreate-tag-container">
            <div className="NoteCreate-tag-label">Tags: {this.state.tags.map((tag, i) => this.getTagLink(tag, i))}</div>
            <input
              className="NoteCreate-input-tag"
              type="text"
              placeholder="Add Tag"
              name="nextTag"
              value={this.state.nextTag}
              onChange={this.onChange}
            />
            <div onClick={this.onTagSubmit} className="NoteCreate-update-btn NoteCreate-tag-btn">Add</div>
          </div>
        </div>
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
