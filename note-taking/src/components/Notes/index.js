import React from "react";
import { Component } from "react";
import NotesList from "../NotesList";
import CreateNotes from "../CreateNotes";
import Axios from 'axios';

class Notes extends Component {
  state = {
    notes: [
    ],
    note: ""
  };

  handleSetData = data => this.setState({ notes: data });

  componentDidMount() {
    Axios
      .get("http://localhost:8000/api/notes")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({notes: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeNote = e => this.setState({ [e.target.name]: e.target.value });

  createNotes = e => {
    e.preventDefault();
    const notes = this.state.notes.splice();
    notes.push({
      id: Date.now(),
      notetitle: this.state.note,
      notebody: this.state.note
    });
    this.setState({ notes, note: "" });
  };

  render() {
    return (
      <div>
        <p>Your Notes: </p>
        <NotesList items={this.state.notes} />
      </div>
    );
  }
}

export default Notes;
