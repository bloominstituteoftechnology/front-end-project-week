import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components';

import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import NoteListView from './views/NoteListView';
import NoteView from './views/NoteView';
import NoteFormView from './views/NoteFormView';

const Wrapper = Styled.div`
  background-color: #f3f3f3;
  height: 100%;
`;

const SideNav = Styled.div`
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    width: 20%;
`;

const Content = Styled.div`

  margin-left: 20%;
  width: 80%;


  background-color: #f3f3f3;
`;

class App extends Component {

  render() {
    return (
      <Wrapper>
        <SideNav>
          <Navigation />
        </SideNav>
        <Content>
          <Route exact path="/" component={NoteListView} />
          <Route exact path="/form" component={NoteFormView} />
          <Route exact path="/notes/:id" component={NoteView} />
        </Content>
      </Wrapper>
    );
  }
}

export default withRouter(App);
