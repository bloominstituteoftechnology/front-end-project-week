import React from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

class NoteContainer extends React.Component {

  handleSingleNoteClick = (theNote, index) => {
    this.props.singleNoteView(theNote, index);
  };

  render() {
    $(document).ready(function() {
      $("ol").sortable();
    });

    return (
      <div className="Notes">
      <p className="yn-title">Your Notes:</p>
        <ol className="sort_d">
          {this.props.notes.map((note, index) => {
              return (
                <li className="wrapper">
                  <div key={index} className="note-container" onClick={() => this.handleSingleNoteClick(note, index)}>
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
