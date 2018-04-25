import React, { Component } from "react";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";
import { Nav, NavItem, NavLink } from "reactstrap";

import IndividualNote from "./IndividualNote";

import "./NoteList.css";

const NoteList = props => {
  // console.log("NoteList: this.props", props.noteArray);
  return (
    <div className="NoteList row p-0 m-0">
      {props.noteArray.map(eachNote => (
        <div className="NoteCard col-4 p-4" key={eachNote.id}>
          <NavLink href={`/note/${eachNote.id}`}>
            <IndividualNote eachNote={eachNote} />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
