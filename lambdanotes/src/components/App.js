import React from 'react';

import { Route } from 'react-router-dom';

import styled from 'styled-components';

import SideBarNav from './Nav/SideBarNav';
import NotesPage from './notes/NotesPage';
import NoteView from './notes/NoteView';

const AppWrapper = styled.div`
  display: flex;
  background: #d3d2d3;
`;

const App = () => {
  return (
    <AppWrapper className="App">
      <SideBarNav />
      <Route path="/note/:id" component={NoteView} />
      <Route exact path="/" component={NotesPage} />
    </AppWrapper>
  );
};
export default App;
