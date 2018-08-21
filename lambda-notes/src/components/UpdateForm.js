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
    console.log('this is state', this.props.location.state);
    const { id } = this.props.location.state;
    const editNote = { editTitle: this.state.editTitle, editTextBody: this.state.editTextBody };
    // console.log(editNote);
    // console.log(this.props.location);
    this.props.updateNote(id, editNote);
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
  { updateNote }
)(UpdateForm);
