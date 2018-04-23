import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from './SideBar';
import { YourNotes, CreateNote, ViewNote, EditNote } from './contentViews/';

const AppWrapper = styled.div`
  display: flex;
  height:100vh;
`;

const SideBarWrapper = styled.div`
  background: #D3D2D3;
  width: 20%;
`;

const ContentWrapper = styled.div`
  background: whitesmoke;
  width: 80%;
  padding: 5% 2%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <SideBarWrapper>
            <SideBar />
          </SideBarWrapper>
          <ContentWrapper>
            <Route exact path="/" component={ YourNotes } />
            <Route exact path="/create" component={ CreateNote } />
            <Route exact path="/view/:id" component={ ViewNote } />
            <Route exact path="/edit/:id" component={ EditNote } />
          </ContentWrapper>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;

//finish setting up a static version of yourNotes view then work on otherviews
//TODO:
  //NoteCard Component
  //mapStateToprops for YourNotes
  //map the list of notes in YourNotes onto NoteCard Components
  //styling for: SideBar, ContentContainer, Your Notes, NoteCard