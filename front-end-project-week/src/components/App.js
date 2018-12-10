import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import SideNav from './SideNav';
import ListNotesView from '../views/ListNotesView';

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
  readNote: `note/get`,
  readNotes: `note/get/all`,
  readNoteId: `note/get/:id`,
  createNote: `note/create`,
  deleteNote: 'note/delete/id',
  editNote: 'note/edit/id'
};

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  background-color: rgb(243, 243, 243);
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
      </DivWrapper>
    );
  }
}

export default App;
