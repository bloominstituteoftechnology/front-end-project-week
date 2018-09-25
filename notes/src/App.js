import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import './styles/App.css';
import NotesView from './views/NotesView';
import NoteFormView from './views/NoteFormView';
import SingleNoteView from './views/SingleNoteView';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <NavBar>
            <NavTitle>Lambda Notes</NavTitle>
            <StyledNavLink exact to="/" activeClassName="activeNavButton">
              View Your Notes
            </StyledNavLink>
            <StyledNavLink to="/addnote" activeClassName="activeNavButton">
              + Create New Note
            </StyledNavLink>
          </NavBar>
          <Content>
            <Route exact path="/" component={NotesView} />
            <Route path="/addnote" component={NoteFormView} />
            <Route path="/note/:noteId" component={SingleNoteView} />
          </Content>
        </Container>
        <BackGround />
      </React.Fragment>
    );
  }
}

export default withRouter(App);

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  height: 100%;
`;

const NavBar = styled.nav`
  background: #d3d2d3;
  height: 100vh;
  width: 20%;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid #c3c2c3;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  background: #59b5bb;
  color: white;
  border: 1px solid #9cb1b3;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 1.2rem;
  margin: 20px 0;
`;

const NavTitle = styled.h1`
  font-size: 2.2rem;
  margin: 10px 0;
`;

const Content = styled.div`
  width: 80%;
  margin-left: 20%;
  padding: 50px 3%;
`;

const BackGround = styled.div`
  border: 1px solid #c3c2c3;
  background: #f2f1f2;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: -1;
  top: 0;
`;
