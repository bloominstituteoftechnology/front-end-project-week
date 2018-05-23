import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ListView from './components/ListView';
import NavBar from './components/NavBar';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    const { noteInList } = this.state;
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
