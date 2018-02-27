import React from 'react';
import { connect } from 'react-redux';

const Note = props => {
  // this is the note object with the id that matches the url
  const note = props.notes.filter(
    note => String(note.id) === props.match.params.id
  )[0];

  return (
    <div className="note__container">
      <div className="note__title">{note.title}</div>
      <div className="note__content">{note.content}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(Note);
