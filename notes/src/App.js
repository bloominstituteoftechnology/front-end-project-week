import React, { Component } from 'react';

import SideNav from './components/SideNav';
import ListView from './components/ListView';
// import CreateView from './CreateView';
// import EditView from './EditView';
// import NoteView from './NoteView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <ListView />
      </div>
    );
  }
}

export default App;
