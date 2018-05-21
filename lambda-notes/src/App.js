import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummyData';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, CardColumns, Container } from 'reactstrap';
import NotesContainer from './components/NotesContainer';
import SideBar from './components/SideBar';

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
        <h5 className="App-header">Your Notes:</h5>
        <Container fluid>
          <Row>
            <Col sm="3" >
               <SideBar />
            </Col>
            {this.state.userNotes.map((note, index) => {
              return ( 
                <Col sm="3" >
                    <NotesContainer key={index} note = {note}/>
                </Col> 
              )
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
