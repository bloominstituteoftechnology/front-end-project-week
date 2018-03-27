import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

//import { Route } from 'react-router-dom';

import { Container, Row } from 'reactstrap';

import Notes from './notes';
import NavBar from './navbar';
import './app.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="Background">
            <NavBar/>
            <Notes/>
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

export default connect(mapStateToProps, { getNotes })(App);
