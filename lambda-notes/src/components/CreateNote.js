import React, { Component } from "react";
import { createNote } from "../actions";
import { connect } from "react-redux";

class CreateNote extends Component {
  state = {
    name: "",
    text: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = note => {
    this.props.createNote(note);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="CreateNote">
        <h4 className="title">Create New Note:</h4>
        <form>
          <input
            className="newTitle"
            type="text"
            name="name"
            placeholder="New Title"
            onChange={this.handleChange}
          />
          <input
            className="newContent"
            type="text"
            name="text"
            placeholder="New Content"
            onChange={this.handleChange}
          />
          <button
            className="save"
            onClick={() => this.handleSubmit(this.state)}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createNote })(CreateNote);
