import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllNotes } from '../actions';
import Notes from '../components/Notes';

// dummy data
// import notesData from '../notes';

class NotesView extends Component {
  componentDidMount() {
    return !this.props.notes.length ? this.props.getAllNotes() : null;
  }

  handleRedirectToNoteView = id => {
    this.props.history.push(`/note/${id}`);
  };

  render() {
    const { notes, isFetching } = this.props;
    return (
      <div className="View NoteView">
        <h2>Your Notes:</h2>
        {isFetching ? (
          <div>Loading Your Notes...</div>
        ) : (
          <Notes
            notes={notes}
            handleRedirectToNoteView={this.handleRedirectToNoteView}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
    isFetching: state.notes.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getAllNotes }
)(NotesView);
