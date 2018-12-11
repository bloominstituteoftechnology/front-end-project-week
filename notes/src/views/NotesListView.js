import React from "react";
import { connect } from "react-redux";
import { getNotes } from "../actions";
import NotesList from "../components/NotesList";

class NotesListView extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    console.log("running render function");
    return (
      <div className="notes-list-wrapper">
        <NotesList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  isFetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getNotes }
)(NotesListView);
