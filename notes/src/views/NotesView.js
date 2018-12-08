// import libraries
import React from 'react';
import { connect } from 'react-redux';

// import actions creators
import {
  getNotes
} from '../store/actions';

// import components
import NotesList from '../components/NotesList';

class NotesView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
        this.props.fetchingNotes ?
          <div>Loading ... </div> :
          !this.props.notes[0] ?
              <div>Something has gone teribbly wrong.</div> :
              <NotesList {...this.props}/>
    )
  }
}

export default connect(
  state => ({
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    error: state.error,
  }),
  {
    getNotes
  }
)(NotesView)
