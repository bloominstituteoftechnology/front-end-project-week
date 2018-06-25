import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import SideNav from './components/SideNav/SideNav';
import NewNote from './components/NewNote/NewNote';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditNote/EditNote';



class App extends Component {


  render() {
  
    return (
      
      <div className="App">
      
        <SideNav />

        <Route exact path="/" component={NotesContainer} />
        <Route path="/create" component={NewNote} />
        <Route exact path="/note/:id" component={NoteView}/>
        <Route path="/note/edit/:id" component={EditNote}/>
      
      </div>
      
    );
  }
}

export default App;
