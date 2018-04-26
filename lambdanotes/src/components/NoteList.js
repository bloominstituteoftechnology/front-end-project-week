import React, { Component } from "react";
import { Container, Input } from "reactstrap";

import NoteCard from "./NoteCard";
import "./NoteList.css";

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleSearchInput = e => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <div>
        <Input
          className="searchbar"
          type="text"
          placeholder="search by title"
          onChange={this.handleSearchInput}
          value={this.state.searchInput}
        />
        <h3 id="your-notes">Your Notes: </h3>
        <Container className="note-list">
          {this.props.notes.map((note, index) => {
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
            }
          })}
        </Container>
      </div>
    );
  }
}

export default NoteList;
