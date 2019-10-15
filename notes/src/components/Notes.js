import React from "react";
import { connect } from "react-redux";

import Note from "./Note";

import { fetchNotes, fetchTags, fetchUserNotes, fetchUserTags } from "../actions/actions";

import "../styles/App.css";

class Notes extends React.Component {

  componentDidMount() {
    const {path} = this.props.match


    if (path === "/my-notes") {
      const user = this.props.user
      this.props.fetchUserNotes(user)
      this.props.fetchUserTags(user)
    } else {
      this.props.fetchNotes();
      this.props.fetchTags();
    }
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
    const {path} = this.props.match
    return (
      <div className="componentContainer">
        {path === "/my-notes" ? <h2>Your Notes:</h2> : <h2>All Notes:</h2>}
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
    tags: state.tags,
    user: state.user
  };
};

export default connect(mapStatetoProps, { fetchNotes, fetchTags, fetchUserNotes, fetchUserTags })(Notes);
// }
