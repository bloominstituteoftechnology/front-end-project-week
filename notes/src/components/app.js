import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';


import { Container, Row } from 'reactstrap';

import Notes from './notes';
import Login from './login';
import Signup from './signup';
import Note from './note';
import EditNote from './editnote';
import Navigation from './navigation';
import NewNote from './newnote';
import './app.css';

import { getNotes } from '../actions/notesActions';
class App extends Component {
  componentWillMount(){
    console.log(this.props, 'inside the will mount APPP');
  }
  
  componentDidMount(){
    console.log(this.props, 'inside the app');
    this.props.getNotes();
  }

  componentWillUpdate(){
    console.log(this.props, 'inside the app UPDATE');
  }

  render() {
    //this.props.state.auth.isAuth ? Notes : Login;
    return (
      <Container>
        <Row className="Background">
            <Navigation />
            <Route exact path='/' component = {Notes} />
            <Route path='/newnote' component = {NewNote} />
            <Route path='/login' component = {Login} />
            <Route path='/signup' component = {Signup} />
            <Route exact path='/note/:id' component = {Note} />
            <Route path='/note/edit/:id' component = {EditNote} />
        </Row>   
      </Container>
    );
  }
}

const mapStateToProps = ({notes, isAuth}) => {
  return {
   notes,
   isAuth,
  }
};

export default withRouter(connect(mapStateToProps, { getNotes })(App));
