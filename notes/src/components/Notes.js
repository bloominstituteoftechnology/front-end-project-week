import React from "react";
import { connect } from "react-redux";

import Note from "./Note";

import { fetchNotes, fetchTags } from "../actions/actions";

import "../styles/App.css";

class Notes extends React.Component {

  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchTags();
  }
  // sortNotes = (a, b) => {
  //   if (b.id < a.id) return 1;
  //   if (b.id > a.id) return -1;
  //   return 0;
  // };

  // let sortedNotes = this.props.notes.sort(this.sortNotes);
  // if (!notes) {
  //   return (
  //   <div className="componentContainer"></div>
  //   );
  // } else {
  render() {
    let notes = this.props.notes;
    return (
      <div className="componentContainer">
        <h2>Your Notes:</h2>
        <div className="notesContainer">
          {notes.map(note => (
            <Note key={note.id} note={note} tags={this.props.tags} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    notes: state.notes,
    tags: state.tags
  };
};

export default connect(mapStatetoProps, { fetchNotes, fetchTags })(Notes);
// }
