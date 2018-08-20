import React, { Component } from 'react';
import SideBar from './components/sidebar/';
import Notes from './components/notes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SideBar/>
       <Notes/>
      </div>
    );
  }
}

export default App;
