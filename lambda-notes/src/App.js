import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <div className="Lambda Notes App">
        <NavBar /> 
        <NotesList />
        <CreateNote />
        
      </div>

    );
  }
}
export default App;
