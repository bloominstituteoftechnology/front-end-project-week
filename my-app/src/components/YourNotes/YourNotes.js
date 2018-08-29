import React, { Component } from "react";
import NoteCard from "./NoteCard";
import "./YourNotes.css";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";

class YourNotes extends Component {
  render() {
    return (
      <div>
        <Link exact to="/">Home</Link>
        <br />
        <Link exact to="/editnote">Edit</Link>
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
