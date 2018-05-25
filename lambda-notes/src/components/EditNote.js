import React, { Component } from "react";
import { connect } from "react-redux";
import { editNote } from "../actions";

class EditNote extends Component {
  state = {
    id: parseInt(this.props.match.params.id),
    title: "",
    content: ""
  };

  handleNoteInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEdit = e => {
    e.preventDefault();
    this.props.editNote(this.state);
    this.setState({ title: "Note Title", content: "Note Content" });
    // this.props.history.push(`/notes/${this.state.id}`);
    window.location.href="/";
  };

  render() {
    return (
      <div className="col-sm-9 create-div">
        <div className="create-form">
          <div className="form-group">
            <h4>Edit Note:</h4>
          </div>
          <div className="form-group">
            <input
              className="form-title form-control"
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
            onClick={this.handleEdit}
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, { editNote })(EditNote);