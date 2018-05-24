import React, { Component } from "react";
import { connect } from "react-redux";
import { editNote } from "../actions";

class EditNote extends Component {
  state = {
    title: "",
    content: ""
  };

  handleNoteInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.editNote(this.state);
    this.setState({ title: "", content: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="col-sm-9 create-div">
        <div className="create-form">
          <div className="form-group">
            <h4>Note:</h4>
          </div>
          <div className="form-group">
            <input
              className="form-title"
              placeholder="Note Title"
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleNoteInput}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control form-content"
              rows="9"
              placeholder="Note Content"
              name="content"
              type="text"
              value={this.state.content}
              onChange={this.handleNoteInput}
            />
          </div>
          <button
            type="submit"
            className="create-button"
            onClick={this.handleSave}
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { editNote })(EditNote);