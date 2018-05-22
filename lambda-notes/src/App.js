import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import note from "./components/dummyData";
import NoteList from './components/NoteList'
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    this.setState ({ 
      notes: note
    })
  }

  render() {
    const { noteInList } = this.state;
    return (
      <Container>
        <Row>
          <Col sm='3'>
            <NavBar />
          </Col>
          <Col sm='9'>
            <NoteList />
          </Col> 
        </Row>
          <h4>Your Notes:</h4>
      </Container>
    );
  }
}

export default App;
