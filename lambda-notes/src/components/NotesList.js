import React from "react";
import _ from "underscore";
import { connect } from "react-redux";
import { deleteNote } from "../actions/notesAction";
import Note from "./Note";

class NotesList extends React.Component {

  render() {
    return (
      <div className="notes-list">
        {_.map(this.props.notes, (note, key) => {
          return (
            <Note
              title={note.title}
              key={key}
              body={note.body}
              id={key}
              deleteNote={this.props.deleteNote}/>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { deleteNote })(NotesList);