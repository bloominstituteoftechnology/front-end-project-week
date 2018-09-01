import React, { Component } from "react";
import NoteCard from "./NoteCard";

import "./ListView.css";

class ListView extends Component {
  render() {
    return (
      <div className="note-container">
        <h5 className="list-header">Your Notes: </h5>
        <ul>
          {this.props.notes.map((note, index) => {
            return <NoteCard key={index} notes={note} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ListView;
