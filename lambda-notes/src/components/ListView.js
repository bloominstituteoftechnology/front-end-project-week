import React from "react";
import {CSVLink} from "react-csv";
import axios from "axios";
import "../App.css";

import NoteCard from "./Notes/NoteCard";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tags: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://heronotes-gabe.herokuapp.com/tags")
      .then(res => {
        console.log(res.data);
        this.setState({tags: res.data});
      })
      .catch(err => console.log(err));
  };

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
      return <h2 className="loading">Loading</h2>;
    }
    return (
      <div className="list-view">
        <span>
          <i className="fas fa-search" />
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
          {filteredNotes.map((note, index) => {
            return <NoteCard note={note} key={index} tags={this.state.tags} />;
          })}
        </div>
      </div>
    );
  }
}

export default ListView;
