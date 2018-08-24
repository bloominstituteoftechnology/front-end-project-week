import React, { Component } from 'react';

import SideNav from './components/SideNav';
import ListView from './components/ListView';
import CreateView from './components/CreateView';
// import EditView from './components/EditView';
// import NoteView from './components/NoteView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        {/* <ListView 
        {...this.state} /> */}
        <CreateView />
      </div>
    );
  }
}

export default App;
