import React from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

class NoteContainer extends React.Component {

  handleSingleNoteClick = (theNote, index) => {
    this.props.singleNoteView(theNote, index);
  };


    render() {
      let handleWasDragged = (sortedArr) => {
        this.props.sortAfterDrag(sortedArr)
      }
    $("ol").sortable({
      update: function (event, ui) {
        var data = $(this).sortable('serialize');
        handleWasDragged(data);
      }
    });
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
