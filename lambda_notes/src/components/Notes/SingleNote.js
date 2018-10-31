import React from 'react';
import { Link } from 'react-router-dom';

import { SingleNoteContainer, SingleNoteActions } from './Styles';

const SingleNote = props => {
  return (
    <SingleNoteContainer>
      <SingleNoteActions>
        <Link to={`/edit/${props.note._id}`}>
          <button type="button">Edit</button>
        </Link>
        <button type="button" onClick={(e) => props.deleteNote(e, props.note._id)}>Delete</button>
      </SingleNoteActions>

      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </SingleNoteContainer>
  );
}

export default SingleNote;
