import React, { Component } from "react";
import Note from "./Note";
import "./Notes.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";
class Notes extends Component {
  state = {
    searchNoteFilter: ""
  };
  handleSearchNoteFilter = e => {
    this.setState({
      searchNoteFilter: e.target.value
    });
  };
  render() {
    const { notes } = this.props;

    if (notes) {
      // matches notes based on user ID
      const filteredNotes = this.props.notes.filter(
        note => note.userID === localStorage.getItem("userID")
      );

      // filters notes based on user input on serch bar
      const filteredNotesPlusSearch = filteredNotes.filter(
        note =>
          note.title.toLowerCase().includes(this.state.searchNoteFilter) ||
          note.textBody.toLowerCase().includes(this.state.searchNoteFilter)
      );
      return (
        <React.Fragment>
          <form className="form-search-filter">
            <input
              type="text"
              placeholder="Search Notes"
              value={this.state.searchNoteFilter}
              name="searchNoteFilter"
              onChange={this.handleSearchNoteFilter}
            />
          </form>
          <div className="notes-container">
            {filteredNotes.length ? (
              <h1 className="your-notes">Your Notes:</h1>
            ) : (
              <h1 className="your-notes">Add a Note to get started</h1>
            )}

            {filteredNotesPlusSearch.map(note => (
              <Note note={note} key={note.id} />
            ))}
          </div>
        </React.Fragment>
      );
    } else {
      return <Spinner />;
    }
  }
}

// connect to firestore
export default compose(
  firestoreConnect([{ collection: "notes" }]),
  connect((state, props) => ({
    notes: state.firestore.ordered.notes
  }))
)(Notes);
