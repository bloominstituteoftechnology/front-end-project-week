import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../App.css";

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes,
      id: null,
      title: "",
      note: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.value]: e.target.name });
  
  };

  onSaveHandler = e => {
    e.preventDefault();

    const notes = {
      id: this.state.id,
      title: this.state.title,
      note: this.state.note
    };
    this.setState({ notes: notes, id: 3, title: "", note: "" });
  };

  render() {
    console.log('inputing', this.state.title)
    return (
      <div className="form">
        <div className="form-title">Create New Note:</div>

        <form onSubmit={this.onSaveHandler}>
          <input
            type="text"
            className="form-title"
            name="title"
            onChange={this.inputHandler}
            placeholder="Note Title"
            value={this.state.title}
          />
          <input
            type="text"
            className="form-note"
            name="note"
            onChange={this.inputHandler}
            placeholder="Note Content"
            value={this.state.note}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
