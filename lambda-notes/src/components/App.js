import React, { Component } from 'react';
import './App.css';
import SideBarContainer from './SideBarContainer/SideBarContainer';
import NotesContainer from './NotesContainer/NotesContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <SideBarContainer />
        <Route exact path='/' component={NotesContainer} />
        
      </div>
      );
    }
  }
  
  export default App;
