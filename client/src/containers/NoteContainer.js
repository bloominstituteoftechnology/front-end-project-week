import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOne, deleteNote } from '../actions';
import NoteView from '../components/NoteView';

class NoteContainer extends Component {
  state = {
    requested: false,
  };

  componentDidMount() {
    this.props.fetchOne(this.props.match.params.id);
  }

  onDelete = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.setState({
      requested: true,
    });
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
          Something went wrong, please try again {this.props.error.message}
        </div>
      );
    }

    if (this.state.requested) {
      this.props.history.push('/');
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
  { fetchOne, deleteNote },
)(NoteContainer);
