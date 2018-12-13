import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import SideNav from './SideNav';
import ListNotesView from '../views/ListNotesView';
import NoteView from '../views/NoteView';
import CreateNoteView from '../views/CreateNoteView';
import EditNoteView from '../views/EditNoteView';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const isTestServerOn = false;
const server = isTestServerOn
  ? 'http://localhost:3333'
  : 'https://fe-notes.herokuapp.com';
export const urlLinks = {
  server: server,
  home: '/',
  readNotes: `note/get/all`,
  readNoteServer: `note/get`,
  readNoteClient: `note/get/single`,
  readNoteId: `note/get/single/:id`,
  createNote: `note/create`,
  deleteNote: 'note/delete',
  editNoteServer: 'note/edit',
  editNoteClient: 'note/get/edit',
  editNoteId: 'note/get/edit/:id'
};

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const App = props => {
  return (
    <DivWrapper>
      <SideNav
        viewNotesLink={`${urlLinks.home}${urlLinks.readNotes}`}
        createNoteLink={`${urlLinks.home}${urlLinks.createNote}`}
      />
      <Route
        exact
        path={`${urlLinks.home}${urlLinks.readNotes}`}
        render={() => (
          <ListNotesView
            noteDetailsLink={`${urlLinks.home}${urlLinks.readNoteClient}`}
          />
        )}
      />
      <Route
        exact
        path={`${urlLinks.home}${urlLinks.readNoteId}`}
        render={props => (
          <NoteView
            history={props.history}
            match={props.match}
            editNoteLink={`${urlLinks.home}${urlLinks.editNoteClient}`}
            viewNotesLink={`${urlLinks.home}${urlLinks.readNotes}`}
          />
        )}
      />
      <Route
        exact
        path={`${urlLinks.home}${urlLinks.createNote}`}
        render={() => <CreateNoteView />}
      />
      <Route
        exact
        path={`${urlLinks.home}${urlLinks.editNoteId}`}
        render={props => (
          <EditNoteView
            history={props.history}
            match={props.match}
            noteDetailsLink={`${urlLinks.home}${urlLinks.readNoteClient}`}
          />
        )}
      />
    </DivWrapper>
  );
};

export default App;
