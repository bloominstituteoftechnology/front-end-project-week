import React, { Component } from 'react';
import { fetchNotes } from '../../actions';
import { connect } from 'react-redux';
class NotesPage extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return <div className="NotesPage">NotesPage</div>;
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  fetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesPage);
