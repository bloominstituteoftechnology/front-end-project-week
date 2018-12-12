import React from "react";
import { NotesData } from "../NotesData";
import { Sidebar, NoteList } from "../components";
import { fetchNotes, addNote, deleteNote } from "../actions/index";
import { connect } from "react-redux";

class ListView extends React.Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  componentDidUpdate() {
    this.props.fetchNotes();
  }
  render() {
    if (this.props.fetchingFriends) {
      return (
        <div className="loading">
          <h1>Getting notes...</h1>
        </div>
      );
    }
    return (
      <div className="container">
        <Sidebar />
        <NoteList notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    fetchingNotes: state.notesReducer.fetchingNotes,
    error: state.notesReducer.error,
    deletingNote: state.notesReducer.deletingNote
  };
};
export default connect(
  mapStateToProps,
  {
    fetchNotes,
    addNote,
    deleteNote
  }
)(ListView);
