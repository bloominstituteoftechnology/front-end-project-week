import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './style/App.css';
import NoteList from './components/NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <div className='nav-container col-3'>
              <h3>Lambda Notes</h3>
              <Button className='nav-btn' block>View Your Notes</Button>
              <Button className='nav-btn' block>Create New Note</Button>
            </div>
            <div className='note-container col-9'>
              <NoteList />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;


