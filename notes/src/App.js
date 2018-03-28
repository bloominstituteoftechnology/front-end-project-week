import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import LeftBar from './Components/LeftBar';
import List from './Components/List';
import Delete from './Components/Delete';
import Create from './Components/Create';

class App extends Component {
  render() {
    return (
      <div>
        <LeftBar />
        <div className="App">
          <Route exact path="/" component={List} />
          <Route exact path="/Create" component={Create} />
        </div>
      </div>
    );
  }
}

export default App;
