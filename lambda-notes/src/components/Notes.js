import React, { Component } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      search: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4444/notes")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSearchInput = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <form className="searchbar">
          <input
            onChange={this.handleSearchInput}
            type="text"
            placeholder="Search..."
            value={this.state.search}
          />
        </form>
        <h2 className="notesheading">Your Notes:</h2>
        <div className="notes">
          {this.state.notes.map(note => {
            if (this.state.search === "") {
              return <NoteCard note={note} key={note.id} />;
            } else if (
              note.textBody
                .toLowerCase()
                .includes(this.state.search.toLowerCase())
            ) {
              return <NoteCard note={note} key={note.id} />;
            } else {
              return <div>No results found...</div>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Notes;
