import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import ListView from './components/ListView';
import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Route exact path="/" component={ListView}></Route>
      <Route exact path="/createNote" component={CreateNote}></Route>
        <Navigation />
      </div>
    );
  }
}

export default App;
