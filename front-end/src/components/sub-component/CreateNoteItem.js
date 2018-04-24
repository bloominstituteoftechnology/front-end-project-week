import "./CreateNoteItem.css"

import React, { Component } from "react";
import { createNote } from "../../actions";

import { connect } from "react-redux";

class CreateNoteItem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    title: "",
    content: ""
  };

  render() {
    return (
      <div className="Note_Creator">
        <h1>Create New Note:</h1>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <input
          type="text"
          placeholder="Content"
          name="content"
          value={this.state.content}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.createNote({
              title: this.state.content,
              content: this.state.content
            });
            this.setState({ title: "", content: "" });
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default CreateNoteItem
