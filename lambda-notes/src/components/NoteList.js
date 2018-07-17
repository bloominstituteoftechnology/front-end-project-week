import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

const NoteList = props => {
  if (!props.notes) {
    return (
      <div>Notes are loading...</div>
    )
  }

  const notes = props.notes.slice().reverse();

  return (
    <div className="main-container">
      <h2>Your Notes:</h2>
        <div className="note-previews-container">
          {notes.map(note => {
            return (
              <Link to={`/notes/${note._id}`} key={Math.random()}>
                <div className="note-preview-container">
                  <h3>{note.title}</h3>
                  <LinesEllipsis text={note.textBody}
                                 maxLine='7'
                                 ellipsis='...'
                                 trimRight
                                 basedOn='words'
                  />
                </div>
              </Link>
            );
          })}
        </div>
    </div>
  )
}

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
