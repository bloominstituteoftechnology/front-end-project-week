import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import CreateNewNote from './components/CreateNewNote/CreateNewNote';

import { Container, Row } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
            <Route path='/' component={Nav} />
            <Route exact path='/' component={ListView} />
            <Route exact path='/create-new-note' component={CreateNewNote} />
            {/* <Router path='/note-view/edit' component={EditNote} */}

            <Route exact path='/0' component={NoteView} />
            <Route exact path='/1' component={NoteView} />
            <Route exact path='/2' component={NoteView} />
            <Route exact path='/3' component={NoteView} />
            <Route exact path='/4' component={NoteView} />
            <Route exact path='/5' component={NoteView} />
            <Route exact path='/6' component={NoteView} />
            <Route exact path='/7' component={NoteView} />
            <Route exact path='/8' component={NoteView} />
        </Row>
      </Container>
    );
  }
}

export default App;
