import React from "react";
import { connect } from "react-redux";
import Note from "./Note";


class NoteBody extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="noteBody">
        <div className="UserNote">Your Notes:</div>
        {this.props.notes.map(note => <Note key={note.id} note={note} />)}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NoteBody);
