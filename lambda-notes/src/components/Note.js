import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note }) => {
  return ( 
    <div className="note-card">
      <div className="content">
        <h3>{note.title}</h3>
        <p>{note.textBody}</p> 
      </div>
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