// import libraries
import React from 'react';
import { connect } from 'react-redux';

// import actions creators
import {
  addNote,
  deleteNote,
  updateNote,
} from '../store/actions';

// import components
import NotesList from '../components/NotesList';

class NotesView extends React.Component {
  render() {
    return (
      <NotesList
        notes={this.props.notes}
      />
    )
  }
}

export default connect(
  state => ({
    notes: state,
  }),
  {
    addNote,
    deleteNote,
    updateNote,
  }
)(NotesView)
