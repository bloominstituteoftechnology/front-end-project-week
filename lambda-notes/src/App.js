import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CreateNoteView from './views/CreateNoteView';
import EditNoteView from './views/EditNoteView';
import NoteView from './views/NoteView';
import NotesListView from './views/NotesListView';
import Sidenav from './components/Sidenav';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  
  render() {
    return (
      <div className="App">
      <Sidenav/>

      <Route exact path='/' 
            render = {props =>
               <NotesListView 
                {...props}
                componentDidMount={this.componentDidMount}
                notes={this.state.notes}
                />} />
      <Route path='/create-note' component={CreateNoteView} />
      <Route path='/note/:id' component={NoteView} />
      <Route path='/edit-note/:id' component={EditNoteView} />




      </div>
    );
  }
}

export default App;
