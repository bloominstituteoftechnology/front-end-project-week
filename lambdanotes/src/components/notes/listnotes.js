import React, { Component } from "react";
import Note from "./note";

class ListNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Your Notes:</h3>
        <div>
          {this.props.notes.map(note => (
            <Note key={this.props.notes.id} note={note} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListNotes;
