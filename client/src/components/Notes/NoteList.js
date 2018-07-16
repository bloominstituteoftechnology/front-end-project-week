import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import NoteListItem from './NoteListItem';

class NoteList extends Component {
  static propTypes = {
    notes: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    const { notes } = this.props.notes;

    if (!notes) return <h2>Loading...</h2>;

    return (
      <div>{notes.map(note => <NoteListItem {...note} key={note._id} />)}</div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state
});
export default connect(
  mapStateToProps,
  actions
)(NoteList);
