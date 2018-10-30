import React, { Component } from 'react';
import { connect } from 'react-redux';

class Note extends Component {
  render() {
    const noteId = this.props.match.params.id;
    const note = this.props.notes.find(note => note._id === noteId);
    console.log('single Note', note.title)

    return (
      <>
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
};

export default connect(mapStateToProps)(Note);
