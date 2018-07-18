import React, { Component } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
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

  render() {
    return (
      <div>
        <h2 className="notesheading">Your Notes:</h2>
        <div className="notes">
          {this.state.notes.map(note => {
            return <NoteCard note={note} key={note.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Notes;
