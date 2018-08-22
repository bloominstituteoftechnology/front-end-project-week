import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("createProps", this.props);
    return (
      <div className="createNote-container">
        <div className="CreateNote-form">
          <hi>Create a note:</hi>
          <input
            className="title-input"
            type="text"
            onChange={this.handleTextInput}
            placeholder="Note title"
            name="title"
            value={this.props.title}
          />

          <input
            className="content-input"
            type="text"
            onChange={this.handleTextInput}
            placeholder="Note content"
            name="content"
            value={this.props.content}
          />

          <button className="save-button" onClick={this.props.makeNote}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
