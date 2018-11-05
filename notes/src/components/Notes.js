import React, { Component } from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes
    };
  }
  deleteNote = event => {
    event.preventDefault();
    console.log("trying to delete...");
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.id}`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="yourNotes">
        Notes
        {this.props.notes.map(note => (
          <div className="note">
            <NavLink to="/notes/{id}">
              <h1>{note.title}</h1>
            </NavLink>
            <p>{note.textBody}</p>
            <button onClick={this.deleteNote}>Delete Note</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Notes;
