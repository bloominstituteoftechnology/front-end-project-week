import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LambdaNav from './components/LambdaNav.js';
import HomePage from './components/Homepage/HomePage.js';
import axios from 'axios';
import { Route } from 'react-router-dom';
import CreateNote from './components/CreateNotePage/CreateNote.js'

class App extends Component {

  constructor() {
  super();
      this.state = {
        notes: [

        ]
      };
    }


  componentDidMount(){
  const URL = 'https://killer-notes.herokuapp.com/note'
  axios
  .get(`${URL}/get/all`)
  .then(response => {
    this.setState( ()  => ({notes:response.data}));
  })
  .catch(err => {
      console.error('Server Error', err);
  })
  }



  render() {
    return (
      <div className="App">
        <Route path= "/" component ={LambdaNav} />
        <Route exact path = '/' render ={props => <HomePage {...props} notes = {this.state} />}/>
        <Route path = "/CreateNote"  render ={props => <CreateNote {...props} notes = {this.state} />}/>
      </div>
    );
  }
}

export default App;
