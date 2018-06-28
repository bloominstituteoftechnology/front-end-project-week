import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar.js';
import ListView from './components/ListView.js';
import CreateNote from './components/CreateNote.js';
import ViewNote from './components/ViewNote.js';
import EditNote from './components/EditNote.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notesList: [],
      currentNote: {}
    }
  }

  componentDidMount() {
    axios
      .get(`https://lambdanotesbyhonda.herokuapp.com/notes/get/`)
        .then(res => {this.setState({notesList: res.data})})
        .catch(err => {console.log(err)})
  }

  switchNote = (noteID) => {
    axios
      .get(`https://lambdanotesbyhonda.herokuapp.com/notes/${noteID}`)
        .then(res => {this.setState({currentNote: res.data})})
        .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className='App'>
        <div className='nav-bar-container'>
          <Route path='/' component={NavBar} />
        </div>
        <div className='note-container'>
          <Route exact path='/' render={ (props) => { return(<ListView {...props} notesList={this.state.notesList} switchNote={this.switchNote}/>)}} />
          <Route path='/note/create' component={CreateNote} />
          <Route exact path='/:_id' render={ (props) => { return(<ViewNote {...props} currentNote={this.state.currentNote} />)}} />
          <Route path='/:_id/edit' render={ (props) => { return(<EditNote {...props} currentNote={this.state.currentNote} />)}} />
        </div>
      </div>
    );
  }
}

export default App; 