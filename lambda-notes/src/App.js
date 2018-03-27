import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SideNav from './components/SideNav';
import mainBody from './components/mainBody';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component= { SideNav } />
        <Route exact path="/" component={ mainBody } />
        </div>
        </Router>
    );
  }
}

export default App;
