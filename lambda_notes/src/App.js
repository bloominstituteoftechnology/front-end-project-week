import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import CreateNew from './components/CreateNew';
import Display from './components/Display';
import EditNote from './components/EditNote';
import ViewList from './components/ViewList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Sidebar/> 
       <ViewList />
      </div>
    );
  }
}

export default App;
