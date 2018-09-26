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
    console.log("single id", id);
    this.props.setUpdateNote(id);
    this.props.history.push("/create-note");
  };

  handleDeleteNote = noteId => {
    this.props.deleteNote(noteId);
  };

  render() {
    console.log("note props", this.props);
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
  console.log("state", state);
  return {
    notesList: state.notes,
    fetchingNotes: state.fetchingNotes
  };
};

export default connect(
  mapStateToProps,
  { getNotes, deleteNote, setUpdateNote }
)(SingleNoteView);
