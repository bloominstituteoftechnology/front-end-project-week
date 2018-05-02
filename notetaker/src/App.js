import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import './App.css';
import Notes from './Components/Notes';
import { getNotes } from './Actions';
import { Container, Row, Col } from 'reactstrap';

class App extends Component { 
  componentDidMount(){
    this.props.getNotes();
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm='4'>
              Lambda NoteTaker
            </Col>
            <Col md='8'>
              <Notes {...this.props} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: [
    {
      title: 'Note Title',
      content: 'Note Content',
      id: 0
    },
    {
      title: 'Note Title',
      content: 'Note Content',
      id: 1
    },
  ]
  }
} 
export default connect(mapStateToProps, { getNotes })(App);
