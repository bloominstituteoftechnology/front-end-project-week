// import libraries
import React from 'react';
import { connect } from 'react-redux';

// import actions creators
import {
  getNotes,
  dragDrop,
} from '../store/actions';

// import components
import NotesList from '../components/NoteList/NotesList';

class NotesView extends React.Component {
  componentDidMount() {
    const {loggedIn, history, getNotes } = this.props;

    // push to login page if not already logged in
    !loggedIn && history.push('/login');

    getNotes();
  }

  render() {
    return (
      <NotesList {...this.props}/>
    )
  }
}

export default connect(
  state => ({
    notes: state.notes,
    loggedIn: state.loggedIn,
    fetchingNotes: state.fetchingNotes,
    error: state.error,
  }),
  {
    getNotes,
    dragDrop,
  }
)(NotesView)
