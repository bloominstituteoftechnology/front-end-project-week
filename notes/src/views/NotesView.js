import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotesView extends Component {
  render() {
    return (
      <div>
        <h1> NotesView</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    notes: state.notesReducer.notes,
    fetchingData: state.notesReducer.fetchingData,
    error: state.notesReducer.error,
  };
};

export default connect(
  mapStateToProps,
  {}
)(NotesView);
