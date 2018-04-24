import React, { Component } from "react";
import  Note  from '../Note/Note.js';

class NoteList extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>List of Notes</h2>
        {props.notes.map((note) => {
          return <Note title={note.title} description={note.description}/>
        })}
      </div>
    )
  };
}

export default NoteList;