import React, { Component } from "react";
import Note from "./note";
import { Link } from "react-router-dom";
import axios from "axios";

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    axios
      .get("https://lambdanotesserver.herokuapp.com/notes")
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <h1>Your Notes:</h1>
        <div className="noteCards">
          {this.state.notes.map(note => {
            return (
              <Link
                key={note.id}
                className="LinkStyle"
                to={`/note-details/${note.id}`}
              >
                <Note
                  title={note.title}
                  id={note.id}
                  tags={note.tags}
                  content={note.content}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NoteList;
