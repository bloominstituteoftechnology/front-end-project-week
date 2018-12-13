import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNotes } from '../../actions';

import Notes from '../Notes';

class NotesView extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    if (this.props.gettingNotes) {
      return <h1>Loading Notes...</h1>
    }

    return (
      <Notes notes={this.props.notes} />
    );
  }

}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes,
    editedNote: state.editedNote
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes }
  )(NotesView)
);
