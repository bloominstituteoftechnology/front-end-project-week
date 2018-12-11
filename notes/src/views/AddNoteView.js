import React from "react";
import { connect } from "react-redux";
import { addNote, getNotes, editNote } from "../actions";
import AddNote from "../components/AddNote";

function AddNoteView(props) {
  return <AddNote {...props} />;
}

const mapStateToProps = state => ({
  note: state.note
});

export default connect(
  mapStateToProps,
  { addNote, getNotes, editNote }
)(AddNoteView);
