import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lambda Notes</h1>
        <Route path="/" component={NavBar} />
      </div>
    );
  }
}

export default App;
