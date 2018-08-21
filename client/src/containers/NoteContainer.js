import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOne } from '../actions';
import NoteView from '../components/NoteView';

class NoteContainer extends Component {
  componentDidMount() {
    this.props.fetchOne(this.props.match.params.id);
  }
  render() {
    if (this.props.isFetching) {
      return <div>Loading...</div>;
    } else {
      return <NoteView note={this.props.currentNote} />;
    }
  }
}

export default connect(
  ({ currentNote, isFetching }) => ({ currentNote, isFetching }),
  { fetchOne },
)(NoteContainer);
