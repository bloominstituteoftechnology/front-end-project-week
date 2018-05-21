import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import SideNav from './components/SideNav/SideNav';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SideNav />
       <NotesContainer />
      </div>
    );
  }
}

export default App;
