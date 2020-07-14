import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/Authentication/Authentication';
import NotesPage from './components/NotesContainer/NotesPage';



class App extends Component {

  render() {
    
    return (
      <div>
        <NotesPage />
      </div>
    );
  }
}


export default Authenticate(App);

