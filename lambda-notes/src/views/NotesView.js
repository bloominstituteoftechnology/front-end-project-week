import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllNotes } from '../actions';
import { CSVLink } from 'react-csv';

import Notes from '../components/Notes';
import StyledSpinner from '../styles/StyledSpinner';

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
        <nav
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <CSVLink
            data={notes}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <span style={{ 'font-size': '1.2rem' }}>EXPORT: CSV</span>
          </CSVLink>
        </nav>
        <h2>Your Notes:</h2>
        {isFetching ? (
          <StyledSpinner />
        ) : (
          <Notes
            FilterResults={this.props.FilterResults}
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
