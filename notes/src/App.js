import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import './styles/App.css';
import Nav from './components/Nav';
import NotesView from './views/NotesView';
import NoteFormView from './views/NoteFormView';
import SingleNoteView from './views/SingleNoteView';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Nav />
          <Content>
            <Route exact path="/" component={NotesView} />
            <Route path="/addnote" component={NoteFormView} />
            <Route exact path="/note/:noteId" component={SingleNoteView} />
            <Route
              path="/note/:noteId/edit"
              render={(props) => <NoteFormView {...props} editForm={true} />}
            />
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
