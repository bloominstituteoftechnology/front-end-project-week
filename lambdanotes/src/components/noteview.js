import React from 'react';
import './noteview.css';
import { Modal, ModalBody } from 'reactstrap';
import LambdaButton from './lambdabutton.js';

//The component for viewing an individual note.
const NoteView = (props) => {
  //This component is state aware; if the state is view, then the component shows
  //a view of the selected note.  If the state is deleting, the component shows
  //a modal asking the user for confirmation.
  let deleting = (props.appState === "deleting");
  return (
    <div className="note-view">
      <div className="note-view-links">
        <div className="note-view-link" onClick={props.editMethod}>edit</div>
        <div onClick={props.deleteMethod} className="note-view-link">delete</div>
      </div>
      <h5 className="note-view-title">{props.note.title}</h5>
      <p className="note-view-content">{props.note.textBody}</p>
      <Modal isOpen={deleting} toggle={props.cancelDeleteMethod} className="my-modal">
        <ModalBody className="delete-modal">
          Are you sure you want to delete this?
          <div className="delete-buttons">
            <LambdaButton
              color="red"
              text="Delete"
              myFunc={() => props.reallyDeleteMethod(
                props.fetcher,
                "https://killer-notes.herokuapp.com/note/",
                props.note._id
              )}
            />
            <LambdaButton color="green" text="No" myFunc={props.cancelDeleteMethod} />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default NoteView;
