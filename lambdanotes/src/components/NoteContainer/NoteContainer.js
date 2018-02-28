import React from 'react';

class NoteContainer extends React.Component {

  handleSingleNoteClick = (theNote, index) => {
    this.props.singleNoteView(theNote, index);
  };

  render() {
    return (
      <div className="Notes">
      <div className="sn-title yn-title">Your Notes:</div>
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
