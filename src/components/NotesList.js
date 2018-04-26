import React, { Component } from "react";

import Note from "./Note";

class NotesList extends Component {
  state = {
    search: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase()
    });
  };

  render() {
    const filteredNotes = this.props.notes.filter(note => {
      return note.title.toLowerCase().indexOf(this.state.search) !== -1;
    });

    return (
      <div className="notes">
        <div className="search">
          <h3>Your notes:</h3>
          <input
            onChange={this.onChange}
            name="search"
            type="text"
            placeholder="Search notes by title..."
          />
        </div>
        {filteredNotes.map((note, index) => {
          return <Note key={index} note={note} id={index} />;
        })}
      </div>
    );
  }
}

export default NotesList;
