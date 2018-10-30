import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

import NotesList from '../components/Notes/NotesList';

class ListView extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <NotesList notes={this.props.notes} />
    );
  }

}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes })(ListView);
