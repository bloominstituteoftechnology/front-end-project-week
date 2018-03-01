import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote, editNote } from '../Redux/actions';
import LeftBar from '../LeftBar/LeftBar';
import { Modal } from './Modal';
import { EditNoteFields } from './EditNoteFields';
import './SingleNote.css';

class SingleNote extends Component {
  state = {
    note: {},
    title: '',
    body: '',
    deleteButtonPressed: false,
    editButtonPressed: false,
  };

  componentWillMount() {
    this.fetchNotes(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.fetchNotes(newProps);
  }

  fetchNotes = props => {
    const id = Number(props.match.params.id);
    const thisNote = props.notes.filter(each => each.id === id)[0];
    this.setState({ note: thisNote });
  };

  displayState = key => {
    return this.state[key];
  };

  updateState = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  editNote = event => {
    event.preventDefault();

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

  render() {
    return (
      <div>
        {this.state.editButtonPressed ? (
          <EditNoteFields
            updateState={this.updateState}
            editNote={this.editNote}
            displayState={this.displayState}
            id={this.state.note.id}
          />
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
            {this.state.deleteButtonPressed && (
              <Modal
                toggleDelete={this.toggleDelete}
                deleteNote={this.deleteNote}
              />
            )}
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
