import React, { Component } from 'react';

class NoteView extends Component {
  render() {
    return (
      <div className="noteDiv">
        <h3 className="noteTitle">
          {this.props.location.state.currentNote.title}
        </h3>
        <p className="noteContent">
          {this.props.location.state.currentNote.text}
        </p>
      </div>
    );
  }
}

export default NoteView;
