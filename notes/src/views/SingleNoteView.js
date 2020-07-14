import React from "react";
import SingleNote from "../components/SingleNote";

import { connect } from "react-redux";

import { getNotes, deleteNote, setUpdateNote } from "../store/actions";

class SingleNoteView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  goToUpdateForm = (event, id) => {
    event.preventDefault();
    this.props.setUpdateNote(id);
    this.props.history.push("/create-note");
  };

  handleDeleteNote = noteId => {
    this.props.deleteNote(noteId);
  };

  render() {
    return (
      <SingleNote
        fetchingNotes={this.props.fetchingNotes}
        handleDeleteNote={this.handleDeleteNote}
        goToUpdateForm={this.goToUpdateForm}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    notesList: state.notes,
    fetchingNotes: state.fetchingNotes
  };
};

export default connect(
  mapStateToProps,
  { getNotes, deleteNote, setUpdateNote }
)(SingleNoteView);
