import React, { Component } from "react";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NoteCard from "./NoteCard";

import "./NoteList.css";

const NoteList = props => {
  // console.log("NoteList: this.props", props);
  return (
    <div className="NoteList row p-0 m-0">
      {props.noteArray.map(eachNote => (
        <div className="NoteCard col-4 p-4" key={eachNote.id}>
          <Link to={`/note/${eachNote.id}`}>
            <NoteCard eachNote={eachNote} props={props}/>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
