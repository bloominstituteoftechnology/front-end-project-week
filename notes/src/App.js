import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NotesList from './components/noteslist.js';
import Leftnav from './components/leftnav';
import Frontpage from './components/frontpage';
import CreateNote from './components/createnote';
import Note from './components/note';
import Edit from './components/edit';
class App extends Component {
  render() {
    return (
      <div className="App">
      
       

        <Leftnav />
         <Route exact path='/' component={Frontpage} />
         <Route path='/createnote' component={CreateNote} />
        <Route path='/note/:id' component={Note} />
        <Route path="/edit/:id" component={Edit} /> 
      </div>
    );
  }
}

export default App;
