import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import List from './components/List/List';
import ViewNote from './components/ViewNote/ViewNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" component={List} />
        <Route path="/notes/:id" component={ViewNote} />
      </div>
    );
  }
}

export default App;
