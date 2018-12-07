// import libraries
import React from 'react';
import { connect } from 'react-redux';

// import actions creators
import {
  deleteNote,
  updateNote,
} from '../store/actions';

// import components
import NoteDetail from '../components/NoteDetail';

class DetailView extends React.Component {
  render() {
    return (
      <NoteDetail
        {...this.props}
      />
    )
  }
}

export default connect(
  state => ({
    notes: state,
  }),
  {
    deleteNote,
    updateNote,
  }
)(DetailView)
