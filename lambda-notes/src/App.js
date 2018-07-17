import React, { Component } from 'react';
import './App.css';
import NoteList from './Components/NoteList/notelist';
import NewNoteForm from './Components/NewNotePage/newnoteform';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Route exact path='/' component={NoteList}/>
        <Route path='/create' component={NewNoteForm}/>
      </div>
    );
  }
}

export default App;
