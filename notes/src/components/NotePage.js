import React from 'react';
import { Link } from 'react-router-dom';

const NotePage = props => {
  console.log('match', props.match.params.id);
  const note = props.getNote(props.match.params.id);
  return(
    <div className="note-page">
      <div className="links">
        <Link to={`/note/${note.id}/edit`}>Edit</Link>
      </div>
      <div className="title">{note.title}</div>
      <div className="text">{note.textBody}</div>
    </div>
  );
}

export default NotePage;
