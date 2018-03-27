import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import ListView from './components/ListView/ListView';
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
        </Row>
      </Container>
    );
  }
}

export default App;
