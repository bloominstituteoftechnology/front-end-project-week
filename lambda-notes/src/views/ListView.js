// React imports
import React, { Component } from 'react';
// Component imports
import NotesList from '../components/NotesList';
// Redux imports
import { connect } from 'react-redux';
// Action imports
import { fetchNotes } from '../actions';
class ListView extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div>
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return {
    notes
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(ListView);
