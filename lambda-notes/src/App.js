import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import NoteList from './components/noteViews/NoteList';
import SideNav from './components/SideNav';
import NewNote from './components/noteViews/NewNote';
import Note from './components/note';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideNav className="nav-component"/>
      
      <Switch>
        <Route exact path='/' component={NoteList}/>
        <Route path='/new' component={NewNote}/>
        <Route path='/note/:id' component={Note}/>
        
      </Switch>
      {/* <NewNote/> */}
      </div>
    );
  }
}

export default App;
