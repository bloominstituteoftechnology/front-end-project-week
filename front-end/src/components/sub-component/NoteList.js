import React, { Component } from "react";
import { fetchNotes } from "../../actions";
import { connect } from "react-redux";

class NoteList extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    console.log("things in props.notes", this.props.notes);
    return (
      <div>
        {this.props.notes.map(eachNote => (
          <div key={eachNote.id}>
            <div>{eachNote.title}</div>
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
