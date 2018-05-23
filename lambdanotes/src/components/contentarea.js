import React from 'react';
import NoteList from './notelist.js';
import NoteView from './noteview.js';
import NoteForm from './noteform.js';
import { Alert } from 'reactstrap';
import './contentarea.css';


const ContentArea = (props) => {
  let myNote;
  switch (props.appState) {
    case "list":
      return (
        <NoteList viewMethod={props.viewMethod} notes={props.notes} alphabetizeNotes={props.alphabetizeNotes} />
      );
    case "deleting":
    case "view":
      myNote = props.notes.filter((note) => note._id === props.viewId)[0];
      return (
        <NoteView appState={props.appState}
          note={myNote}
          deleteMethod={props.deleteMethod}
          reallyDeleteMethod={props.reallyDeleteMethod}
          cancelDeleteMethod={props.cancelDeleteMethod}
          editMethod={props.editMethod}
          fetcher={props.fetcher} />
      );
    case "create":
      return (
        <NoteForm fetcher={props.fetcher} topText="Create New Note:" myTitle="" myContent="" myMethod={props.saveNewMethod} />
      );
    case "edit":
      myNote = props.notes.filter((note) => note._id === props.viewId)[0];
      return (
        <NoteForm fetcher={props.fetcher} topText="Edit A Note:" myTitle={myNote.title} myContent={myNote.textBody} myMethod={props.saveEditMethod} myId={props.viewId} />
      );
    case "fetching":
      return (
        <Alert className="loading-alert" color="dark">
        Loading ...
        </Alert>
      );
    default:
      return (
        <div>
          Oh no!  Something is wrong.  No recongized app state.
        </div>
      );
  }
}

export default ContentArea;
