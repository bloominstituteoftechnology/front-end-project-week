import React from "react";
import Note from "../components/Note";

import { connect } from "react-redux";

import { getNotes } from "../store/actions";

class NoteView extends React.Component {
  componentDidMount() {
    if (this.props.notesList.length === 0) {
      this.props.getNotes();
    }
  }

  render() {
    return (
      <Note
        {...this.props}
        notesList={this.props.notesList}
        fetchingNotes={this.props.fetchingNotes}
      />
    );
  }
}

const mapStateToProps = state => ({
  notesList: state.notes,
  fetchingNotes: state.fetchingNotes
});

export default connect(
  mapStateToProps,
  { getNotes }
)(NoteView);
