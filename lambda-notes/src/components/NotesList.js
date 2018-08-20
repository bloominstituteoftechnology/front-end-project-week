import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import "../App.css";

const NotesList = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     notes: [],
  //   };
  // }

  // componentDidMount() {
  //   axios
  //   .get('http://localhost:8000/api/notes')
  //   .then((response) => {
  //     this.setState({notes: response.data})
  //   })
  //   .catch(err => console.log(err));
  // }

  // render() {
  return (
    <div className="notes-list-div">
      <p className="notes-list-title">Your Notes: </p>
      <div className="notes-list-sort-div">
      </div>
      <ul className="notes-list">
        {props.notes.map(note => {
          return (
            <Link className="note-link" to={`/notes/${note.id}`} key={note.id}>
              <p className="note-link-title">{note.title.substring(0, 20)}</p>
              <hr className="note-link-hr" />
              <p>{note.content.substring(0, 150)}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};


export default NotesList;
