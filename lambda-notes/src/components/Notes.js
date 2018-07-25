import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

class Notes extends Component {
  handleDeleteNote = () => {
    const { _id } = this.props.selectedNote;
    this.props.deleteNote(_id);
  };

  render() {
    return (
      <div>
        {this.props.notes.map((note) => (
          <div className="Note" key={Math.random()}>
            <div>{note.title}</div>
            <div>{note.textBody}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // deletingNote: state.noteReducer.deletingNote,
    // // error: state.noteReducer.error,
    // selectedNote: state.noteReducer.selectedNote
  };
};

export default connect(
  mapStateToProps,
  {
    deleteNote
  }
)(Notes);
