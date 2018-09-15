import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import {Route} from 'react-router-dom';
import axios from 'axios';
import ViewNote from './components/ViewNote';
// import Authenticate from './components/Authentication/Authenticate';
import Register from './components/Register';
// import Login from './components/Login/Login';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('App location', this.props.location);
    return (
      <div className="App">
        <Route exact path='/' component={NotesList} />
        <Route exact path='/create' component={CreateNote} />
        <Route exact path='/notes/:id' component={ViewNote} />
        <Route exact path="/signup" component={Register} />
      </div>
    );
  }
}

export default App;
