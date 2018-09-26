import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../../actions";
import SideBar from "../Sidebar/sidebar";
import "./notelist.css";
import Note from "./note";

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  } //this.props.fetchNotes();

  render() {
    return (
      <div className="page-container">
        <SideBar />
        <div className="section-container">
          <h1 className="notes-title">Your Notes: </h1>
          <div className="note-container">
            {!this.props.notes.length && (
              <div>You have no notes! Create a new note to get started.</div>
            )}
            {this.props.notes.map(note => (
              <Note key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NoteList);
