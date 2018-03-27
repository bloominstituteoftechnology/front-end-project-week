import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { getNotes } from '../actions';

//import { Route } from 'react-router-dom';

import { Container, Row } from 'reactstrap';

import Notes from './notes';
import Note from './note';
import NavBar from './navbar';
import NewNote from './newnote';
import './app.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="Background">
            <NavBar/>
            <Route exact path='/' component = {Notes} />
            <Route path='/newnote' component = {NewNote} />
            <Route path='/note/:id' component = {Note} />
        </Row>   
      </Container>
    );
  }

  componentDidMount(){
    this.props.getNotes();
  }
}

const mapStateToProps = ({ notes}) => {
  return {
    notes,
  }
};

export default withRouter(connect(mapStateToProps, { getNotes })(App));
