import React from "react";
import { connect } from "react-redux";

import { getNotes, deleteNote, setUpdateNote } from "../store/actions";

import Note from "../components/Note/Note";

class NoteView extends React.Component {
  componentDidMount() {
    if (this.props.notesList.length === 0) {
      this.props.getNotes();
    }
  }

  handleDeleteNote = noteId => {
    this.props.deleteNote(noteId);
  };

  goToUpdateNoteForm = (event, id) => {
    event.preventDefault();
    this.props.setUpdateNote(id);
    this.props.history.push("/note-form");
  };

  render() {
    return (
      <Note
        {...this.props}
        notesList={this.props.notesList}
        isLoading={this.props.isLoading}
        handleDeleteNote={this.handleDeleteNote}
        goToUpdateNoteForm={this.goToUpdateNoteForm}
      /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
    );
  }
}

const mapStateToProps = state => ({
  notesList: state.notes,
  isLoading: state.isLoading
});

// const mapDispatchToProps = dispatch => ({
//     deleteAvengerOnProps: () => deleteAvenger(id),
// })

export default connect(
  mapStateToProps,
  { getNotes, deleteNote, setUpdateNote }
)(NoteView);
