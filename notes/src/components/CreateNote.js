import React, { Component } from "react";
import { connect } from "react-redux";

import { createNote } from "../actions/noteActions";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  inputHandler = event => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.createNote(this.state);
    this.props.history.push("/NoteList");
    this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <h1>Create New Note</h1>
        <input
          className="form-input"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.inputHandler}
          placeholder="New Title"
        />
        <textarea
          className="text-area"
          type="text"
          name="textBody"
          value={this.state.textBody}
          onChange={this.inputHandler}
          placeholder="New Content"
        />
        <div className="form-btn" color="info" onClick={this.submitHandler}>
          Save
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { createNote }
)(CreateNote);
