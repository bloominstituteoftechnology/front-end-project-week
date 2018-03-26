import React, { Component } from "react";
import { connect } from "react-redux";
import Note from "./Note";

function mapStateToProps(state) {
  return {};
}

class NotesList extends Component {
  render() {
    return (
      <div>
        Note List Loaded<Note />
      </div>
    );
  }
}

export default connect(mapStateToProps)(NotesList);
