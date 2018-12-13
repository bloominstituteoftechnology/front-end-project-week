import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNotes, getNote, deleteNote } from '../../actions';

import Note from '../Note';

class NoteView extends Component {
  state = { show: false };

  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
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
    const note = this.props.note;

    if (this.props.gettingNote) {
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
    note: state.note,
    gettingNote: state.gettingNote
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes, getNote, deleteNote }
  )(NoteView)
);
