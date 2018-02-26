import React, { Component } from "react";

class NoteList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.notes.map(note => {
            return (
              <li key={note.id}>
                <h3>{note.title}</h3> <hr /> <p>{note.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;
