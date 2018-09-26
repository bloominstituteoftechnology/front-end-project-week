import React from 'react';
import PropTypes from 'prop-types';

function NoteContainer(props) {
  if(!props.notesList || !props.notesList.length) {
    return (
      <div class = 'note-system-message'>
        <h3>No notes yet!</h3>
      </div>
    )
  }

  return (
    <div class = 'note-list-wrapper'>
      {props.notesList.map(note => (
        <div className = 'note-card' key = {note.id}>
          <h3 onClick = {() => props.history.push(`/${note.id}`)}>{note.title}</h3>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  )
};

NoteContainer.propTypes = {
  notesList: PropTypes.array,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default NoteContainer;
