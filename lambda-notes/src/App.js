import React, { Component } from 'react';
import './App.css';
import dummyData from './dummyData';
import { Route } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, CardColumns, Container } from 'reactstrap';
import NotesContainer from './components/NotesContainer';
import SideBar from './components/SideBar';
import CreateNote from './components/CreateNote';

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
        <Route exact path="/" render={() => <h5 className="App-header">Your Notes:</h5>} />
        {/* <h5 className="App-header">Your Notes:</h5> */}
        <Container fluid>
          <Row>
            <Col sm="3" >
              <Route exact path="/" component={ SideBar } />
               {/* <SideBar /> */}
            </Col>
            {this.state.userNotes.map((note, index) => {
              return ( 
                <Col sm="3" >
                  <Route exact path="/" render={() => <NotesContainer key={index} note = {note}/>} />
                    {/* <NotesContainer key={index} note = {note}/> */}
                </Col> 
              )
            })}
          </Row>
        </Container>
        <Route path="/createNote" component={ CreateNote } />
      </div>
    );
  }
}

export default App;
