import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../actions";
import "./index.css";

class CreateNote extends Component {
  state = {
    note: {
      _id: "",
      title: "",
      body: "",
      createdAt: ""
    }
  };

  handleSave = () => {
    this.props.saveNote(this.state.note);
  };

  handleChange = event => {
    this.setState({ note: { [event.target.name]: event.target.value } });
  };

  render() {
    return (
      <div className="noteView_container">
        <div className="noteView_topContent">
          <h3 className="content_header">Create New Note:</h3>
        </div>
        <div className="createNote_form">
          <input
            type="text"
            className="createNote_title"
            placeholder="Note Title"
            name="title"
            value={this.state.note.title}
            onChange={this.handleChange}
          />
          <textarea
            className="createNote_body"
            placeholder="Note Content"
            name="body"
            value={this.state.note.body}
            onChange={this.handleChange}
            rows="20"
          />
          <div
            className="nav_button 
          createNote_button 
          button_link"
            onClick={this.handleSave}
          >
            Save
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createNote }
)(CreateNote);
