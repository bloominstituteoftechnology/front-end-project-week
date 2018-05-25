import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Sidebar from './components/Sidebar/Sidebar.js';
import ListView from './components/ListView/ListView.js';
import CreateNote from './components/CreateNote/CreateNote.js';
import ViewNote from './components/ViewNote/ViewNote.js';
import EditNote from './components/EditNote/EditNote.js';

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
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
        .then(res => {this.setState({notesList: res.data})})
        .catch(err => {console.log(err)})

    this.setCurrentNote(this.state.currentNote._id);
  }

  updateState = () => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
        .then(res => {this.setState({notesList: res.data})})
        .catch(err => {console.log(err)})

    this.setCurrentNote(this.state.currentNote._id);
  }

  setCurrentNote = (noteID) => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
        .then(res => {this.setState({currentNote: res.data})})
        .catch(err => {console.log(err)})
  }

  sortNotesList = (property) => {
    console.log('sortNotesList Ran')
    let sortedNotesList = this.state.notesList;
    sortedNotesList = sortedNotesList.sort(function(a,b) {return (a[property].toUpperCase() > b[property].toUpperCase()) ? 1 : ((b[property].toUpperCase() > a[property].toUpperCase()) ? -1 : 0);} );
    this.setState({notesList: sortedNotesList});
  }

  render() {
    return (
      <div className='App'>
        <div className='sidebarContainer'>
          <Route path='/' render={ (props) => { return(<Sidebar {...props} updateState={this.updateState} />)}} />
        </div>
        <div className='viewContainer'>
          <Route exact path='/' render={ (props) => { return(<ListView {...props} notesList={this.state.notesList} setCurrentNote={this.setCurrentNote} sortNotesList={this.sortNotesList} />)}} />
          <Route path='/note/create' render={ (props) => { return(<CreateNote {...props} updateState={this.updateState} setCurrentNote={this.setCurrentNote} currentNote={this.state.currentNote} />)}} />
          <Route exact path='/:_id' render={ (props) => { return(<ViewNote {...props} updateState={this.updateState} currentNote={this.state.currentNote} />)}} />
          <Route path='/:_id/edit' render={ (props) => { return(<EditNote {...props} setCurrentNote={this.setCurrentNote} currentNote={this.state.currentNote} />)}} />
        </div>
      </div>
    );
  }
}

export default App;