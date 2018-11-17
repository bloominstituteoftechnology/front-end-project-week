import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Notes from "./components/Notes"
import CreateForm from './components/CreateForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="sideMenu">
          <h1>Lambda Notes</h1>
          <p className="menuButton">View Your Notes</p>
          <p className="menuButton">+ Create New Note</p>
        </div>
        <div className="mainContent">
          <Route path ="/create" component={  CreateForm  } />
          <Route exact path ="/" component={ Notes } />
        </div>
      </div>
    );
  }
}

export default App;
