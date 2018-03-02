import React from 'react';

class NoteContainer extends React.Component {

  handleSingleNoteClick = (theNote, index) => {
    this.props.singleNoteView(theNote, index);
  };

  render() {
    return (
      <div className="Notes">
      <p className="yn-title">Your Notes:</p>
        {this.props.notes.map((note, index) => {
          return (
            <div className="wrapper">
            <div key={index} className="note-container" onClick={() => this.handleSingleNoteClick(note, index)}>
              <div className="title">{note.noteTitle}</div>
              <hr/>
              <div className="content">{note.noteContent} </div>
            </div>
            </div>
          )
        })}
        </div>
    );
  }
};

export default NoteContainer;
