import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import note from "./components/dummyData";
import NoteList from './components/NoteList'

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
            <h3>Lambda Notes</h3>
            <Button className='main-btn'>View Your Notes</Button>
            <Button className='main-btn'>+Create New Note</Button>
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
