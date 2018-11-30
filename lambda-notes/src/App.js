import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import NoteList from './components/noteViews/NoteList';
import SideNav from './components/SideNav';
import NewNote from './components/noteViews/NewNote';
import Note from './components/note'
import NoteEdit from './components/noteViews/NoteEdit'

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideNav className="nav-component"/>
      
      <Switch>
        <Route exact path='/' component={NoteList}/>
        <Route path='/new' component={NewNote}/>
        <Route exact path='/note/:id' component={Note}/>
        <Route path='/note/edit/:id' component={NoteEdit}/>
        
        
      </Switch>
      {/* <NewNote/> */}
      </div>
    );
  }
}


export default App
