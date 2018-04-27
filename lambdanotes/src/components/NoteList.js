import React, { Component } from "react";
import { Container, Input, Button } from "reactstrap";

import NoteCard from "./NoteCard";
import "./NoteList.css";

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      sortType: null,
      notes: this.props.notes
    };
  }

  handleSearchInput = e => {
    this.setState({ searchInput: e.target.value });
  };

  changeSortType = sortBy => {
    this.setState({ sortType: sortBy });
  };

  render() {
    console.log(this.state.notes);
    let sortedNotes = this.props.notes;
    if (this.state.sortType === "alphabetical") {
      sortedNotes = sortedNotes.sort(function(a, b) {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    }
    if (this.state.sortType === "contentLength") {
      sortedNotes = sortedNotes.sort(function(a, b) {
        return b.content.length - a.content.length;
      });
    }
    if (this.state.sortType === "default") {
      sortedNotes = sortedNotes.sort(function(a, b) {
        return a.id - b.id;
      });
    }
    return (
      <div>
        <Input
          className="searchbar"
          type="text"
          placeholder="search by title or content"
          onChange={this.handleSearchInput}
          value={this.state.searchInput}
        />
        <Button
          className="sort-button"
          color="info"
          onClick={() => this.changeSortType("default")}
        >
          Sorty by Id (Default)
        </Button>
        <Button
          className="sort-button"
          color="info"
          onClick={() => this.changeSortType("alphabetical")}
        >
          Sort by Alphabet
        </Button>
        <Button
          className="sort-button"
          color="info"
          onClick={() => this.changeSortType("contentLength")}
        >
          Sorty by Size
        </Button>
        <h3 id="your-notes">Your Notes: </h3>
        <Container className="note-list">
          {sortedNotes.map((note, index) => {
            if (this.state.searchInput === "") {
              return <NoteCard key={note.title + note.id} note={note} />;
            } else if (
              note.title
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase()) ||
              note.content
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase())
            ) {
              return <NoteCard key={note.title + note.id} note={note} />;
            } else {
              return null;
            }
          })}
        </Container>
      </div>
    );
  }
}

export default NoteList;
