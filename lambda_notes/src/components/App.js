import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListView from './ListView/ListView';
import NoteCard from './NoteCard/NoteCard';
import Navigation from './Navigation/Navigation';
import './App.css';
import CreateNoteView from './CreateNote/CreateNoteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Route exact path="/" component={ListView}/>
        {/* <Route path="/note/:id" component={NoteCard}/> */}
        <Route path="/note/create" component={CreateNoteView}/>
      </div>
    );
  }
}

export default App;
