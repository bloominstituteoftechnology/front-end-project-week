import React from "react";
import {CSVLink} from "react-csv";
import "../App.css";

import NoteCard from "./Notes/NoteCard";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch = e => {
    this.setState({search: e.target.value});
  };

  render() {
    let filteredNotes = this.props.notes.filter(note => {
      return (
        note.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
        note.textBody.toLowerCase().includes(this.state.search.toLowerCase())
      );
    });

    if (!this.props.notes.length) {
      return <h2>Loading</h2>;
    }
    return (
      <div className="list-view">
        <span>
          <i class="fas fa-search" />
          <input
            type="search"
            className="search"
            onChange={this.updateSearch}
            value={this.state.search}
            placeholder="Search notes"
          />

          <CSVLink
            data={this.props.notes}
            target="_blank"
            filename={"lambda-notes.csv"}
            className="csv"
          >
            Download CSV
          </CSVLink>
        </span>
        <h1>Your Notes:</h1>
        <div className="note-card-container">
          {filteredNotes.map(note => {
            return <NoteCard note={note} key={note._id} />;
          })}
        </div>
      </div>
    );
  }
}

export default ListView;
