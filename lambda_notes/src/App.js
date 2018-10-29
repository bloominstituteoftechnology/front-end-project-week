import React, { Component } from 'react';

import NavigationBar from './components/Navigation.js/NavigationBar';
import NotesContainer from './containers/NotesContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavigationBar />
        <NotesContainer />
      </div>
    );
  }
}

export default App;
