import React, { Component } from "react";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";

class NoteList extends Component {
  render(props) {
    console.log("things in props.notes", props);
    return (
      <div>
        {this.props.notes.map(eachNote => (
          <div key={eachNote.id}>
            <div>{eachNote.noteTitle}</div>
            <div>{eachNote.noteContent}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("things in state.note", state.notes);
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { fetchNotes })(NoteList);
