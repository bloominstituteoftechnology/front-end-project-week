import React, { Component } from "react";
import "./NotesHolder.css";
import Note from "./Notes/Note";
import Notes from "../../Notes/NotesData";
import ViewNote from "../../View Note /ViewNote"; 
import {Route} from 'react-router-dom'; 

class NotesHolder extends Component {
  constructor() {
    super();
    this.state = {
      notes: Notes
    };
  }
  render() {
    return (
      <div className="notes-holder">
        <div className="note-card-section">
          <Note note={this.state.notes} />
          </div>
          <div>
          <Route path="/view-note/:id"
          render={props=><ViewNote {...props} viewNote={this.state.notes}/>}/>
        </div>
      </div>
    );
  }
}
export default NotesHolder;
