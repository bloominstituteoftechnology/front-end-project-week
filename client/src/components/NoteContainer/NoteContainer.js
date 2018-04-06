import React from 'react';
import axios from 'axios';

class NoteContainer extends React.Component {

  handleSingleNoteClick = (theNote, index) => {
    axios.post('/notes/shownote', { theNote })
    .then((result) => {
      this.props.singleNoteView(result.data, index);
    });
  };

  render() {
    return (
      <div className="Notes">
      <p className="yn-title">Your Notes:</p>
        <ol className="sort_d">
          {this.props.notes.map((note, index) => {
              return (
                <li id={`list_${index}`} key={index} className="wrapper">
                  <div id={index} className="note-container" onClick={() => this.handleSingleNoteClick(note, index)}>
                    <div className="title">{note.noteTitle}</div>
                    <hr/>
                    <div className="content">{note.noteContent} </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
    );
  }
};

export default NoteContainer;
