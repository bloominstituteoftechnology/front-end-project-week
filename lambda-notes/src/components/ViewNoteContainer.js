import React, { Component } from 'react';
import ViewNote from './ViewNote';

class ViewNoteContainer extends Component {

  render() {
      // Filter the notes array looking for an ID match
      let noteMatch = this.props.notes.filter(note => note.id == this.props.match.params.id)
    return (
      <div>
        {/* //Check for length, because on the first render the array will be empty */}
        {(noteMatch.length > 0) ? <ViewNote title={noteMatch[0].title} textBody={noteMatch[0].textBody} /> : null}
      </div>
    );
  }
}

export default ViewNoteContainer 