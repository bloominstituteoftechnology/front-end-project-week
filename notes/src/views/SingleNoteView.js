import React from "react";
import SingleNote from "../components/SingleNote";

import { connect } from "react-redux";

import { getNotes } from "../store/actions";

class SingleNoteView extends React.Component {
  componentDidMount() {
    if (this.props.notesList.length === 0) {
      this.props.getNotes();
    }
  }

  render() {
    return (
      <SingleNote
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
)(SingleNoteView);
