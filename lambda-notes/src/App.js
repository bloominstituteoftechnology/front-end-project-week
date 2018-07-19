import React, { Component } from 'react';
import './App.css';
import NoteList from './Components/NoteList/notelist';
import NewNoteForm from './Components/NewNotePage/newnoteform';
import NoteCard from './Components/EditNotePage/notecard';
import {Route} from 'react-router-dom';
import EditNoteForm from './Components/EditNotePage/editnoteform';

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="App-container">
        <Route exact path='/' component={NoteList}/>
        <Route path='/create' component={NewNoteForm}/>
        <Route path='/note/:id' component={NoteCard}/>
        <Route path='/edit/:id' component={EditNoteForm}/>
      </div>
    );
  }
}

export default App;
