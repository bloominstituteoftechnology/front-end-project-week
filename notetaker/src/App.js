import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import './App.css';
import Toolbar from './Components/Toolbar'; 
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
            <Col className='Toolbar-left-container' sm='4'>
              <Toolbar />
            </Col>
            <Col className='Notes-col-container' md='8'>
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
    notes: state.notes,
  }
} 
export default connect(mapStateToProps, { getNotes })(App);
