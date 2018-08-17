import React from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../actions";
import NoteList from "../components/NoteList";

class NoteListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div>
        {this.props.fetchingNotes ? (
          <p> ur notes b coming </p>
        ) : (
          <NoteList notes={this.props.notes} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notesReducer.notes,
  fetchingNotes: state.notesReducer.fetchingNotes,
});

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NoteListContainer);
