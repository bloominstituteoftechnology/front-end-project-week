import React from 'react';

class NoteContainer extends React.Component {

  handleSingleNoteClick = (x) => {

  };

  render() {
    return (
      <div className="Notes">
        {this.props.notes.map((note, index) => {
          return (
            <div className="note-container" onClick={this.handleSingleNoteClick(note)}>
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
