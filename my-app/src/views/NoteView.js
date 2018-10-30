import React from "react";
import { connect } from "react-redux";
import { fetchNoteById, deleteNote } from "../actions";
import { Note, Sidebar } from "../components";
import { Route } from "react-router-dom";
import EditView from "./EditView";

class NoteView extends React.Component {
  componentDidMount() {
    const noteId = this.props.match.params.id;
    this.props.fetchNoteById(noteId);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Sidebar />
        <Route
          exact
          path="/:id"
          render={props => (
            <Note
              {...props}
              note={this.props.note}
              delete={this.props.deleteNote}
            />
          )}
        />
        <Route path="/:id/edit" render={props => <EditView {...props} />} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    noteUpdated: state.notesReducer.noteUpdated,
    note: state.noteReducer.note,
    error: state.noteReducer.error,
    fetchingNote: state.noteReducer.fetchingNote
  };
};
export default connect(
  mapStateToProps,
  {
    fetchNoteById,
    deleteNote
  }
)(NoteView);
