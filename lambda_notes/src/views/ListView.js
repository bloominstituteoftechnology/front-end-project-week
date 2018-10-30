import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

import NotesList from '../components/Notes/NotesList';

class ListView extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    if (this.props.gettingNotes) {
      return <h1>Loading Notes...</h1>
    }

    return (
      <NotesList notes={this.props.notes} />
    );
  }

}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes
  }
}

export default connect(mapStateToProps, { getNotes })(ListView);
