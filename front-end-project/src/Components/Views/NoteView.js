import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../../Actions';
import Note from '../Note';
class NoteView extends Component {
  state = { show: false };
  componentDidMount() {
    this.props.getNotes();
  }
  deleteNote = (e, id) => {
    e.preventDefault();
    this.props.deleteNote(id);
    this.props.getNotes();
    this.props.history.push('/');
  }
  showModal = () => {
    this.setState({ show: true });
  }
  hideModal = () => {
    this.setState({ show: false });
  }
  render() {
    const noteId = this.props.match.params.id;
    const note = this.props.notes.find(note => note._id === noteId);
    if (this.props.gettingNotes) {
      return <h2>Loading note...</h2>
    }
    if (note) {
      return <Note note={note} deleteNote={this.deleteNote} hideModal={this.hideModal} showModal={this.showModal} show={this.state.show} />
    } else {
      return <h2>404: Note Not Found</h2>
    }
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes
  }
};
export default connect(mapStateToProps, { getNotes, deleteNote })(NoteView);
