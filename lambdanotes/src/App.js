import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import notesList from './notes-list.js';
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
  }

  setCurrentNote = (noteID) => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
        .then(res => {this.setState({currentNote: res.data})})
        .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className='App'>
        <div className='sidebarContainer'>
          <Route path='/' component={Sidebar} />
        </div>
        <div className='viewContainer'>
          <Route exact path='/' render={ (props) => { return(<ListView {...props} notesList={this.state.notesList} setCurrentNote={this.setCurrentNote}/>)}} />
          <Route path='/create' component={CreateNote} />
          <Route exact path='/:_id' render={ (props) => { return(<ViewNote {...props} currentNote={this.state.currentNote} />)}} />
          <Route path='/:_id/edit' component={EditNote} />
        </div>
      </div>
    );
  }
}

export default App;