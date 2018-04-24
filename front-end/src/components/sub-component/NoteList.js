import React, { Component } from "react";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";

import "./NoteList.css";

const NoteList = props => {
  console.log("NoteList: this.props", props.noteArray);
  return (
    <div className="NoteList row p-0 m-0">
      {props.noteArray.map(eachNote => (
        <div className="NoteCard col-4 p-4" key={eachNote.id}>
          <h1>{eachNote.title}</h1>
          <div className="TextBox">{eachNote.content}</div>
        </div>
      ))}
    </div>
  );
};

export default NoteList
