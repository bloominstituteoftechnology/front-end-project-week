import React from 'react';
import NoteList from './notelist.js';
import NoteView from './noteview.js';

const ContentArea = (props) => {
  switch (props.appState) {
    case "list":
      return (
        <NoteList viewMethod={props.viewMethod} notes={props.notes} />
      );
    case "view":
      let myNote = props.notes.filter((note) => note.id === props.viewId)[0];
      return (
        <NoteView note={myNote} />
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
