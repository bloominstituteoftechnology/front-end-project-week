import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import SideNav from './SideNav';
import ListNotesView from '../views/ListNotesView';
import NoteView from '../views/NoteView';
import CreateNoteView from '../views/CreateNoteView';

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
  readNoteServer: `note/get`,
  readNotes: `note/get/all`,
  readNoteClient: `note/get/single`,
  readNoteId: `note/get/single/:id`,
  createNote: `note/create`,
  deleteNote: 'note/delete/id',
  editNote: 'note/edit/id'
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
      </DivWrapper>
    );
  }
}

export default App;
