import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';

import './App.css';
import Toolbar from './Components/Toolbar';
import CreateNote from './Components/CreateNote';
import ViewNote from './Components/ViewNote';
import Notes from './Components/Notes';
import Edit from './Components/Edit';
import { getNotes } from './Actions';

import { Container, Row, Col } from 'reactstrap';

class App extends Component { 
  componentDidMount() {
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
              <Route exact path='/' render={ () =>
                <Notes {...this.props} /> } />
              <Route path='/add' component={CreateNote} />
              <Route path={`/notes/:id`} component={ViewNote} />
              <Route path='/edit' component={Edit} />
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
    note: state.note
  }
} 
export default connect(mapStateToProps, { getNotes })(App);
