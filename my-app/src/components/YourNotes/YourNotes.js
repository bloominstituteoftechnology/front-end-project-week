import React, { Component } from "react";
import NoteCard from "./NoteCard";
import "./YourNotes.css";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";

class YourNotes extends Component {
  render() {
    return (
      <div>
        <SideMenu />
        <h2>Your Notes</h2>
        <div className="cards-container">
          {this.props.notes.map(note => {
            return (
              <div key={note._id}>
                <NoteCard note={note} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default YourNotes;
