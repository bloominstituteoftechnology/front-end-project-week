import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note }) => {
  return (
    <div className="note-card" key={note.id}>
      <h3>{note.title}</h3>
      <p>{note.textBody}</p>
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    textBody: PropTypes.string
  })
}

export default Note;