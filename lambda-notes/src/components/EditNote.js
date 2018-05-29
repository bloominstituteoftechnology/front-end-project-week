import React, { Component } from "react";
import { connect } from "react-redux";
import { editNote } from "../actions";

class EditNote extends Component {
  state = {
    id: this.props.match.params.id,
    title: "",
    content: ""
  };

  matchedNote = this.props.notes.filter(note => {
    return note.id == this.props.match.params.id;
  })[0];

  componentDidMount() {
    this.setState({
      title: this.matchedNote.title,
      content: this.matchedNote.content
    });
  }

  handleNoteInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEdit = e => {
    e.preventDefault();
    this.props.editNote(this.state);
    this.setState({
      id: `${this.props.match.params.id}`,
      title: `${this.props.match.params.title}`,
      content: `${this.props.match.params.content}`
    });
    // this.props.history.push(`/notes/${this.state.id}`);
    window.location.href = "/";
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