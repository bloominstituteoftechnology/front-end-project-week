import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// eslint-disable-next-line
import { Link } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import ListView from './components/NotesView/ListView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Sidebar />
          <div className="notes-view">
            <Route exact path="/" component={ListView} />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
