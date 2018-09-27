import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOne, deleteNote, clearError } from '../actions';
import NoteView from '../components/NoteView';

class NoteContainer extends Component {
  componentDidMount() {
    this.props.fetchOne(this.props.match.params.id);
  }

  onDelete = () => {
    this.props.deleteNote(this.props.match.params.id, () =>
      this.props.history.push('/notes'),
    );
  };

  render() {
    if (this.props.isFetching) {
      return <div>Loading...</div>;
    }

    if (this.props.isDeleting) {
      return <div>Deleting note...</div>;
    }

    if (this.props.error) {
      return (
        <div>
          Something went wrong, please try again{' '}
          {this.props.error.message || this.props.error}
          <button onClick={this.props.clearError}>OK</button>
        </div>
      );
    }

    return <NoteView note={this.props.currentNote} onDelete={this.onDelete} />;
  }
}

export default connect(
  ({ currentNote, isFetching, isDeleting, error }) => ({
    currentNote,
    isFetching,
    isDeleting,
    error,
  }),
  { fetchOne, deleteNote, clearError },
)(NoteContainer);
