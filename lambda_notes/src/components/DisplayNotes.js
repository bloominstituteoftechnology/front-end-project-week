import React, { Component } from "react";
import { viewNote } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NoteCard from "./card";
import {notes} from "./defaultNotes"

class DisplayNotes extends Component {
  state = {
    id: "",
  };

  render() {
    return (
      <div className="right-div">
        <h3 className="notes-header">Your Notes:</h3>
        <div className="notes-div">
        {this.props.notes.map(note => (
          <NoteCard key={note.id}/>
       ))};
      </div>
      </div>
    );
  }

  

}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { viewNote })(DisplayNotes);