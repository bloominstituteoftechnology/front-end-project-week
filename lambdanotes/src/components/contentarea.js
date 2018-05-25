import React from 'react';
import NoteList from './notelist.js';
import NoteView from './noteview.js';
import NoteForm from './noteform.js';
import { Alert } from 'reactstrap';
import './contentarea.css';

//This main component displays different subcomponents depending on the app state
const ContentArea = (props) => {
  let myNote;
  switch (props.appState) {
    //The default app state.  Show a list of all notes.
    case "list":
      return (
        <NoteList viewMethod={props.viewMethod} notes={props.notes} />
      );
    //show a view of an individual note
    //myNote is state aware, so it can be invoked the same for two different states
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
    //Invoke NoteForm with props that allow creation of a new note
    case "create":
      return (
        <NoteForm
          fetcher={props.fetcher}
          topText="Create New Note:"
          myTitle=""
          myContent=""
          myMethod={props.saveNewMethod}
        />
      );
    //Invoke NoteForm with props that allow editing an existing note.
    case "edit":
      myNote = props.notes.filter((note) => note._id === props.viewId)[0];
      return (
        <NoteForm
          fetcher={props.fetcher}
          topText="Edit A Note:"
          myTitle={myNote.title}
          myContent={myNote.textBody}
          myMethod={props.saveEditMethod}
          myId={props.viewId}
        />
      );
    //Display a loading message while waiting for server response.
    case "fetching":
      return (
        <Alert className="loading-alert" color="dark">
          Loading ...
        </Alert>
      );
    //Display the error message returned from an AJAX request.
    case "error":
      return (
        <div className="mt-5 mr-5 ml-5">
          <Alert color="danger">
            {props.error.message}
          </Alert>
        </div>
      );
    //This should never be reached.
    default:
      return (
        <div>
          Oh no!  Something is wrong.  No recongized app state.
        </div>
      );
  }
}

export default ContentArea;
