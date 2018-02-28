import React from 'react';

class NoteContainer extends React.Component {

  handleSingleNoteClick = (theNote, index) => {
    this.props.singleNoteView(theNote, index);
  };

  render() {
    return (
      <div className="Notes">
        {this.props.notes.map((note, index) => {
          return (
            <div key={index} className="note-container" onClick={() => this.handleSingleNoteClick(note, index)}>
              <div className="title">{note.noteTitle}</div>
              <div className="content">{note.noteContent} </div>
            </div>
          )
        })}
        </div>
    );
  }
};

export default NoteContainer;
