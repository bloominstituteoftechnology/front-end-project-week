// import libraries
import React from 'react';
import { connect } from 'react-redux';

// import actions creators
import {
  getNote,
  deleteNote,
} from '../store/actions';

// import components
import NoteDetail from '../components/NoteDetail/NoteDetail';

class DetailView extends React.Component {
  componentDidMount() {
    this.props.getNote(this.props.match.params._id);
  }

  render() {
    return (
      <NoteDetail {...this.props} />
    )
  }
}

export default connect(
  state => ({
    note: state.note,
    fetchingNote: state.fetchingNotes,
    error: state.error,
  }),
  {
    getNote,
    deleteNote,
  }
)(DetailView)