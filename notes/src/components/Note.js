import React, { Component } from "react";
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: this.props.notes
    };
  }
  deleteNote = event => {
    let notes = this.state.notes;
    event.preventDefault();
    console.log("trying to delete...");
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${notes.id}`, (req, res) => {
          notes = notes.filter(note => note.id !== req.param.id);
          console.log(res);
      })
  };

  render() {
    return (
      <div>
        {this.props.notes.map((note, index) => (
          <div className="note" key={index}>
            <NavLink to="/notes/:id">
              <h1>{note.title}</h1>
            </NavLink>
            <p>{note.textBody}</p>
            {note.tags.map((tag, index) => (
              <div key={index}>Tag:{tag}</div>
            ))}
            <button onClick={this.deleteNote}>Delete Comment</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Note;
