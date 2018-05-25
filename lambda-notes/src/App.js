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
import EditNote from './components/EditNote';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userNotes: [],
      selectedNote: {}
  }
}

componentDidMount () {
  this.setState ({
    userNotes: dummyData
  })
}


viewCurrentNote = (noteID) => {
  return this.setState({selectedNote: noteID}) 
  
}


  render() {

    return (
      <div className="App">
        {/* <row>
          <div className ="sidebar col-md-3">
            <Route path="/" component={ SideBar } />
          </div>
          <div className="contentContainer col-md-9">
            <Route exact path="/" render={(props) => { return <NotesContainer notes={this.state.userNotes}/>}} />
          </div>
        </row> */}
        
  
       <Container fluid style={{height: `100%`}}> 
          <Row>
            <Col className="sidebar" sm="3">
              <Route path="/" component={ SideBar } />
            </Col>
            <Col className="content-container" sm="9" >
             
              <Route exact path="/" render={(props) => { return <NotesContainer {...props} notes={this.state.userNotes} viewCurrentNote = {() => this.state.viewCurrentNote} />}} />

              <Route path="/createNote" render={(props) => <CreateNote notes={this.state.userNotes}/>} />

              <Route path='/noteView/:noteID' render={ (props) => {return <NoteView currentNote={this.state.selectedNote}/>}} />
              {/* notes={this.state.userNotes} */}

              <Route path="/editNote" render={(props) => <EditNote notes={this.state.userNotes}/>} />

            </Col>
          </Row>
       </Container>
  
      </div>
    );
  }
}

export default App;
