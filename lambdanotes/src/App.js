import React, { Component } from 'react';
import SideBarNav from './components/SideBarNav';
import NotesPage from './components/notes/NotesPage';
import './App.css';

class App extends Component {
  render() {
    return <SideBarNav />
    <NotesPage/>
  }
}

export default App;
