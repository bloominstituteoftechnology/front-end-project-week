import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: this.props.notes
    };
  }

  render() {
    return (
      <div>
        Notes
        {this.props.notes.map((note, index) => (
          <div className="note" key={index}>
            <NavLink to={`/notes/${note._id}`}>
              <h1>{note.title}</h1>
            </NavLink>
            <p>{note.textBody}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Note;
