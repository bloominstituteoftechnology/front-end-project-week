import React, { Component } from 'react';
import EditNote from './EditNote';

class EditNoteContainer extends Component {
  render() {
      // Filter the notes array looking for an ID match
      let noteMatch = this.props.notes.filter(note => note.id == this.props.match.params.id)
    return (
      <div>
        {/* //Check for length, because on the first render the array will be empty */}
        {(noteMatch.length > 0) ? <EditNote title={noteMatch[0].title} textBody={noteMatch[0].textBody} id={this.props.match.params.id} editNote={this.props.editNote}/> : null}
      </div>
    );
  }
}

export default EditNoteContainer;