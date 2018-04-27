import React, { Component } from 'react';
import NewNote from './Components/newNote/newNote';
import SideBar from './Components/sideBar/sideBar';
import NoteList from './Components/noteList/noteList';
import { Route } from 'react-router-dom'
import noteData from './noteData'
import Notes from './Components/note/notes.js'
import EditNote from './Components/newNote/editNote'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteData
    };
  }


  render() {
    return (
      <div className="App">
      <Route exactpath='/' component={SideBar} />
      <Route path="/newnote" component={NewNote} />
      <Route path='/notelist' component={NoteList} />
      <Route path='/note' component={Notes} />
      <Route path="/editnote" component={EditNote} />
      </div>
    );
  }
}

export default App;
