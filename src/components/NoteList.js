import React, { Component } from "react";
import NoteCard from "./NoteCard";
import SearchBar from "./SearchBar";

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="note-card-container">
        <div className="notes-header">
          <div>
            <SearchBar
              searchFilterHandler={this.props.searchFilterHandler}
              searchTerm={this.props.searchTerm}
              searchFilter={this.props.searchFilter}
            />
          </div>
          <h3>Your Notes</h3>
        </div>
        {this.props.notes.map(note => {
          return (
            <NoteCard
              key={note}
              deleteNote={this.props.deleteNote}
              note={note}
              editNote={this.props.editNote}
            />
          );
        })}
      </div>
    );
  }
}

export default NoteList;
