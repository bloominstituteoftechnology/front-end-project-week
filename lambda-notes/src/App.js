import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import YourNotes from './Components/YourNotes/YourNotes';
import CreateNewNote from './Components/CreateNewNote/CreateNewNote';
import EditNote from './Components/EditNote/EditNote';
import NoteView from './Components/NoteView/NoteView';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <Route exact path='/' component={YourNotes}/>
        <Route exact path='/create-new-note' component={CreateNewNote}/>
        <Route exact path='/edit-note/:id' component={EditNote}/>
        <Route exact path='/:id' component={NoteView}/>
      </div>
    );
  }
}

export default App;
