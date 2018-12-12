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
    const { loggedIn, history, match, getNote } = this.props;

    // push to login page if not already logged in
    !loggedIn && history.push('/login');

    getNote(match.params._id);
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
    loggedIn: state.loggedIn,
    fetchingNote: state.fetchingNote,
    error: state.error,
  }),
  {
    getNote,
    deleteNote,
  }
)(DetailView)