import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNote } from '../actions';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTitle: '',
      editTextBody: ''
    };
  }

  updateHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateSubmit = () => {
    const note = { editTitle: this.state.editTitle, editTextBody: this.state.editTextBody };
    this.props.updateNote(note);
    this.setState({ editTitle: '', editTextBody: '' });
  };

  render() {
    return (
      <div className="single-note">
        <h3>Edit Note:</h3>
        <input
          className="note-title"
          type="text"
          onChange={this.updateHandler}
          name="editTitle"
          value={this.state.editTitle}
          placeholder="edit title"
        />
        <input
          className="note-text"
          type="text"
          onChange={this.updateHandler}
          name="editTextBody"
          value={this.state.editTextBody}
          placeholder="edit textbody"
        />
        <Link to="/">
          <button className="save-button" onClick={() => this.handleUpdateSubmit()}>
            Update
          </button>
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  {
    updateNote
  }
)(UpdateForm);
