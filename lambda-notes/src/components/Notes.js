import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { Link } from 'react-router-dom';

class Notes extends Component {
  handleDeleteNote = () => {
    const { _id } = this.props.selectedNote;
    this.props.deleteNote(_id);
  };

  render() {
    return (
      <div className="notes">
        {this.props.notes.map((note) => (
          <Link
            className="cards"
            to="https://killer-notes.herokuapp.com/note/get/${_id}"
            key={Math.random()}
          >
            <div>
              <h3>{note.title}</h3>
              <div>{note.textBody}</div>
            </div>
          </Link>
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
