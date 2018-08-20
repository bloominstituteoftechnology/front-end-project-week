import React, { Component } from 'react';
import SideBar from './components/sidebar/';
import Notes from './components/notes';
import NewNote from './components/notes/newNote.js';
import SingleNotePage from './components/notes/singleNotePage.js';
import {Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SideBar/>
       <Route exact path='/' component={Notes}/>
       <Route path='/create' component={NewNote}/>
       <Route path='/:noteId' component={SingleNotePage} />
      </div>
    );
  }
}

export default App;
