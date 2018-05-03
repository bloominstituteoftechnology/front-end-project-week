import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';

import './App.css';
import Toolbar from './Components/Toolbar';
import CreateNote from './Components/CreateNote';
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
              <Route to='/' component={Toolbar} />
            </Col>
            <Col className='Notes-col-container' md='8'>
              <Route to='/notes' render={ () =>
                <Notes {...this.props} /> } />
            </Col>
          </Row>
          <Row>
            <CreateNote />
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
