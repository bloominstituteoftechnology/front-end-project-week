import React from 'react';
import './noteview.css';
import { Modal, ModalBody } from 'reactstrap';
import LambdaButton from './lambdabutton.js';


const NoteView = (props) => {
  let deleting = (props.appState === "deleting");
  console.log(deleting);
  console.log(props.appState);
  return (
    <div className="note-view">
      <div className="note-view-links">
        <div className="note-view-link">edit</div><div onClick={props.deleteMethod} className="note-view-link">delete</div>
      </div>
      <h5 className="note-view-title">{props.note.title}</h5>
      <p className="note-view-content">{props.note.content}</p>
      <Modal isOpen={deleting} className="my-modal">
        <ModalBody className="delete-modal">
          Are you sure you want to delete this?
          <div className="delete-buttons">
            <LambdaButton color="red" text="Delete" />
            <LambdaButton color="green" text="No" />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default NoteView;
