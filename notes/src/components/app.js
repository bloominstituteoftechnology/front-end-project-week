import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { getNotes } from '../actions';


import { Container, Row } from 'reactstrap';

import Notes from './notes';
import Note from './note';
import EditNote from './editnote';
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
            <Route exact path='/note/:id' component = {Note} />
            <Route path='/note/edit/:id' component = {EditNote} />
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
