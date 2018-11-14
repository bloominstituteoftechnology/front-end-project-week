import React from 'react';
import { Link } from 'react-router-dom';

import { OneNoteContainer, OneNoteActions } from './Styles';
import DeleteModal from './DeleteModal';

const OneNote = props => {
  return (
    <OneNoteContainer>
      <OneNoteActions>
        <Link to={`/edit/${props.note._id}`}>
          <button type="button">Edit</button>
        </Link>
        <DeleteModal
          show={props.show}
          hideModal={props.hideModal}
          deleteNote={props.deleteNote}
          noteID={props.note._id}
        />

        <button type="button" onClick={props.showModal}>Delete</button>
      </OneNoteActions>

      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </OneNoteContainer>
  );
}

export default OneNote;