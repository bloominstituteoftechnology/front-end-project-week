import React, { Component } from "react";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";

import "./NoteList.css"

class NoteList extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    console.log("things in props.notes", this.props.notes);
    return (
      <div className="NoteList">
        {this.props.notes.map(eachNote => (
          <div className="NoteCard" key={eachNote.id}>
            <h1>{eachNote.title}</h1>
            <div>{eachNote.content}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("things in state.note", state.notes);
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { fetchNotes })(NoteList);
