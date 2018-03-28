// React and Router
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Nav from './components/Nav/Nav';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import CreateNewNote from './components/CreateNewNote/CreateNewNote';

// Styling
import { Container, Row } from 'reactstrap';
import './App.css';

const App = () => {
  return (
    <Container>
      <Row>
          <Route path='/' component={Nav} />
          <Route exact path='/' component={ListView} />
          <Route exact path='/create-new-note' component={CreateNewNote} />
          {/* <Router path='/note-view/edit' component={EditNote} */}

          <Route exact path='/notes/:id' component={NoteView} />
      </Row>
    </Container>
  );
} // end of App

export default App;
