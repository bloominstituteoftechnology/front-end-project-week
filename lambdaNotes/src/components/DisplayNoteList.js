import DisplayNoteCard from "./DisplayNoteCard";
import React, { Component } from "react";
import SearchNote from "./SearchNote";
import { searchFunc } from "../util";

// DisplayNoteList component is presentational component that manage display of list of note
class DisplayNoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      isSearched: false
    };

    this.displayedNotes = [];
  }

  // to see if "View Your Notes" is clicked.  I use the props.isSearched boolean.
  // Toggle isSearched in redux state to decide whether all notes should be displayed, or
  // notes with search result should be displayed
  // componentDidUpdate checks if isSearched has changed.
  componentDidUpdate(prevProps) {
    if (prevProps.isSearched !== this.props.isSearched) {
      this.setState({
        isSearched: this.props.isSearched,
        query: ""
      });
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      isSearched: true
    });
    this.props.handleSearchBoolean(true);
  };

  render() {
    if (this.state.isSearched)
      this.displayedNotes = searchFunc(this.state.query, this.props.notes);
    else this.displayedNotes = [...this.props.notes];

    return (
      <div className="NoteListContainer">
        <SearchNote
          notes={this.state.notes}
          query={this.state.query}
          handleInputChange={this.handleInputChange}
        />
        <h3> Your Notes : </h3>
        <div className="noteList">
          {this.displayedNotes.map(note => (
            <DisplayNoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayNoteList;
