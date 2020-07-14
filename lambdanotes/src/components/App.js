import React from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';

import SideBarNav from './Nav/SideBarNav';
import NotesPage from './notes/NotesPage';
import NoteView from './notes/NoteView';
import NoteForm from './notes/NoteForm';
const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
`;

const App = () => {
  return (
    <AppWrapper className="App">
      <SideBarNav />
      <Route path="/note/:id" component={NoteView} />
      <Route path="/addnote" component={NoteForm} />
      <Route exact path="/" component={NotesPage} />
    </AppWrapper>
  );
};
export default App;
