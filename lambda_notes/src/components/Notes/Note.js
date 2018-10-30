import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';

class Note extends Component {

  // this worked idk why :)
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const noteId = this.props.match.params.id;
    const note = this.props.notes.find(note => note._id === noteId);

    if (this.props.notes.length === 0) {
      return <h1>Loading notes...</h1>
    }

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

export default connect(mapStateToProps, { getNotes })(Note);
