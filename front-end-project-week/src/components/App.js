import React, { Component } from 'react';
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
const isTestServerOn = true;
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
class App extends Component {
  render() {
    return (
      <DivWrapper>
        <SideNav
          {...this.props}
          viewNotesLink={`${urlLinks.home}${urlLinks.readNotes}`}
          createNoteLink={`${urlLinks.home}${urlLinks.createNote}`}
        />
        <Route
          exact
          path={`${urlLinks.home}${urlLinks.readNotes}`}
          render={props => <ListNotesView {...props} urlLinks={urlLinks} />}
        />
        <Route
          exact
          path={`${urlLinks.home}${urlLinks.readNoteId}`}
          render={props => <NoteView {...props} urlLinks={urlLinks} />}
        />
        <Route
          exact
          path={`${urlLinks.home}${urlLinks.createNote}`}
          render={props => <CreateNoteView {...props} urlLinks={urlLinks} />}
        />
        <Route
          exact
          path={`${urlLinks.home}${urlLinks.editNoteId}`}
          render={props => <EditNoteView {...props} urlLinks={urlLinks} />}
        />
      </DivWrapper>
    );
  }
}

export default App;
