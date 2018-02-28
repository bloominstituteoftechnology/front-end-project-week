import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote, editNote } from '../Redux/actions';
import LeftBar from '../LeftBar/LeftBar';
import './SingleNote.css';

class SingleNote extends Component {
  state = {
    note: {},
    title: '',
    body: '',
    deleteButtonPressed: false,
    editButtonPressed: false,
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const thisNote = this.props.notes.filter(each => each.id === id)[0];
    this.setState({ note: thisNote });
  }

  updateState = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  editNote = event => {
    //event.preventDefault();

    const editedNote = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.editNote(editedNote, this.state.note.id);

    this.setState({
      title: '',
      body: '',
      editButtonPressed: !this.state.editButtonPressed,
    });
  };

  deleteNote = () => {
    this.props.deleteNote(this.state.note);
  };

  toggleDelete = () => {
    this.setState({ deleteButtonPressed: !this.state.deleteButtonPressed });
  };

  toggleEdit = () => {
    this.setState({ editButtonPressed: !this.state.editButtonPressed });
  };

  modal = () => {
    return (
      <div className="modal-layer-one">
        <div className="modal-layer-two">
          <div className="the-modal">
            <div className="modal-text">
              Are you sure you want to delete this?
            </div>
            <Link to="/" className="each-link" onClick={this.deleteNote}>
              <button className="modal-danger">Delete</button>
            </Link>

            <button className="modal-safe" onClick={this.toggleDelete}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  };

  editNoteFields = () => {
    return (
      <div className="container">
        <LeftBar />
        <div className="new-note_body">
          <div className="new-note_header">Edit Note:</div>
          <div className="new-note_fields">
            <form type="submit">
              {/* <form type="submit" onSubmit={this.editNote}> */}
              <div className="title-div">
                <input
                  type="text"
                  className="title-input"
                  placeholder="Note Title"
                  onChange={this.updateState}
                  name="title"
                  value={this.state.title}
                />
              </div>
              <div className="body-div">
                <textarea
                  type="text"
                  className="body-input"
                  placeholder="Note Content"
                  onChange={this.updateState}
                  name="body"
                  value={this.state.body}
                />
              </div>
              <Link to="/" className="each-link" onClick={this.editNote}>
                <input type="submit" value="Save" className="submit-button" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.editButtonPressed ? (
          this.editNoteFields()
        ) : (
          <div className="container">
            <LeftBar />
            <div className="single-note_body">
              <div className="edit-delete_links">
                <div className="links">
                  <div className="each-link" onClick={this.toggleEdit}>
                    edit
                  </div>
                  <div className="each-link" onClick={this.toggleDelete}>
                    delete
                  </div>
                </div>
              </div>
              <div className="single-note_header">{this.state.note.title}</div>
              <div className="single-note_text">{this.state.note.body}</div>
            </div>
            {this.state.deleteButtonPressed && this.modal()}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { deleteNote, editNote })(SingleNote);
