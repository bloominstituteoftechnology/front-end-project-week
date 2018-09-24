import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import './styles/App.css';
import NotesView from './views/NotesView';
import AddNoteView from './views/AddNoteView';

class App extends Component {
  render() {
    return (
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
          <Route path="/addnote" component={AddNoteView} />
        </Content>
      </Container>
    );
  }
}

export default withRouter(App);

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;

const NavBar = styled.nav`
  background: #d3d2d3;
  height: 100vh;
  width: 20%;
  position: sticky;
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
  margin-bottom: 10px;
`;

const Content = styled.div`
  border: 1px solid #c3c2c3;
  width: 80%;
  height: 100vh;
  background: #f2f1f2;
`;
