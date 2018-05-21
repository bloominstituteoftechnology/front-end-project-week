import React from 'react';
import NoteList from './notelist.js';
import NoteView from './noteview.js';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ContentArea = (props) => {
  let myNote;
  switch (props.appState) {
    case "list":
      return (
        <NoteList viewMethod={props.viewMethod} notes={props.notes} />
      );
    case "deleting":
    case "view":
      myNote = props.notes.filter((note) => note.id === props.viewId)[0];
      return (
        <NoteView appState={props.appState} note={myNote} deleteMethod={props.deleteMethod} />
      );
    case "create":
      return (
        <div>CREATE</div>
      );
    default:
      return (
        <div />
      );
  }
}

export default ContentArea;
