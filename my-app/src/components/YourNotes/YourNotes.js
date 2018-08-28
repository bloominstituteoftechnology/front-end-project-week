import React, { Component } from "react";
import NoteCard from "./NoteCard";
import "./YourNotes.css";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";

class YourNotes extends Component {
  state = {
    notes: this.props.notes
  };

  render() {
    return (
      <div>
        <Link exact to="/">Home</Link>
        <SideMenu />
        <div className="cards-container">
          {this.props.notes.map((note, i) => {
            return (
              <div>
                <NoteCard key={i} note={note} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default YourNotes;
