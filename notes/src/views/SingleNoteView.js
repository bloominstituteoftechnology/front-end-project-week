import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

import SingleNote from '../components/Notes/SingleNote';

class SingleNoteView extends Component {
  componentDidMount() {
    if (this.props.notes.length === 0) {
      this.props.fetchData();
    }
  }

  render() {
    return <SingleNote {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  notes: state.notesReducer.notes,
});

export default connect(
  mapStateToProps,
  { fetchData }
)(SingleNoteView);
