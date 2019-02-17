import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNotes, search } from "../../actions";
import SideBar from "../Sidebar/sidebar";
import "./notelist.css";
import Note from "./note";

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  } 

  render() {
    return <div className="page-container">
        <SideBar handleSearchChange={this.props.search} />
        <div className="section-container">
          <h1 className="notes-title">Your Notes: </h1>
          <div className="note-container">
            {!this.props.notes.length && <div>
                <h1>
                  You have no notes! Create a new note to get started.
                </h1>
              </div>}
          {this.props.searching && this.props.searchList.map(note => (
            <Note key={note.id} note={note} />
          ))}
          {!this.props.searching && this.props.notes.map(note => (
            <Note key={note.id} note={note} />
          ))}
          </div>
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    searching: state.searching,
    searchList: state.searchList
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes, search }
)(NoteList);
