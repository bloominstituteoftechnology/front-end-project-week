import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    const note = this.props.notes.filter(
      el => el.id == props.match.params.id
    )[0];
    const parentEdit = this.props.edit;
    // console.log("From Edit.js...", parentEdit, note);

    this.state = {
      id: note.id,
      title: note.title,
      content: note.content,
      notes: []
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const afterEditObj = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content
    };
    // console.log("From handleSubmit Edit.js...");
    this.props.edit(afterEditObj);
  };

  render() {
    return (
      <div className="container1">
        <div className="form-container">
          <div className="edit-heading-text">Edit Note:</div>
          <form onSubmit={this.handleSubmit} action="submit">
            <input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Note Title"
              onChange={this.handleChange}
            />
            <textarea
              name="text"
              placeholder="Note Content"
              rows="15"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </form>
          <Link to="/">
            <div className="save-button" onClick={this.handleSubmit}>
              Update
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
