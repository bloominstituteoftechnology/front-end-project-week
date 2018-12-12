import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addNote, editNote } from "../../Actions";

import "./NoteForm.css";

class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.props.edit) {
      this.props.editNote(this.state, this.props.match.params.id);
    } else {
      this.props.addNote(this.state);
    }
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="note-form-container">
        <h2>{this.props.edit ? "Edit Note" : "Create New Note:"}</h2>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Note Title"
            className="name-input"
            onChange={this.handleInputChange}
          />
          <textarea
            type="text"
            name="textBody"
            value={this.state.textBody}
            placeholder="Note Content"
            className="content-textarea"
            onChange={this.handleInputChange}
          />
          <button className="btn blue">{this.props.edit ? "Update" : "Save"}</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { addNote, editNote }
  )(NoteForm)
);
