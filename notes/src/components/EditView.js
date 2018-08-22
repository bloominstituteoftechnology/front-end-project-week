import React, { Component } from "react";

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEditClick = event => {
    event.preventDefault();
    this.props.editNote(event);
    this.props.history.push("/notes");
  };

  
  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="editNote-container">
        <div className="editNote-form">
          <h1>Edit a note:</h1>
          <input
            className="title-input"
            type="text"
            onChange={this.handleInput}
            placeholder="Note title"
            name="title"
            value={this.props.title}
          />

          <input
            className="content-input"
            type="text"
            onChange={this.handleInput}
            placeholder="Note content"
            name="content"
            value={this.props.content}
          />

          <button className="save-button" onClick={this.handleEditClick}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
