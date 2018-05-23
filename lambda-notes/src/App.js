import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, CardColumns, Container } from 'reactstrap';

import './App.css';
import dummyData from './dummyData';
import NotesContainer from './components/NotesContainer';
import SideBar from './components/SideBar';
import CreateNote from './components/CreateNote';
import NoteView from './components/NoteView';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userNotes: []
  }
}

componentDidMount () {
  this.setState ({
    userNotes: dummyData
  })
}


  render() {

    
    return (
      <div className="App">

  
       <Container fluid>
          <Row>
            <Col className="sidebar" sm="3">
              <Route path="/" component={ SideBar } />
            </Col>
            <Col className="content-container" sm="9">
             
              <Route exact path="/" render={(props) => { return <NotesContainer notes={this.state.userNotes}/>}} />

              <Route path="/createNote" render={(props) => <CreateNote notes={this.state.userNotes}/>} />

              <Route path='/noteView/:noteID' render={ (props) => {return <NoteView notes={this.state.userNotes}/>}} />

            </Col>
          </Row>
       </Container>

      </div>
    );
  }
}

export default App;
