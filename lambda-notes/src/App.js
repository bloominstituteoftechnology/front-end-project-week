import React from 'react';
import './App.css';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import SideBar from './components/SideBar';
import Note from './components/Note'
import { Route } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={ props => <SideBar {...props}/>} />
        <Route exact path="/" render={props => <NotesList {...props} />} />
        <Route path="/new-note" render={props => <NotesForm {...props} />} />
        <Route path="/note/get/:id" render={props => <Note {...props} />} />
      </div>
    );
  }
}

export default App;
