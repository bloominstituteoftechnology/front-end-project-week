import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home'

class App extends Component {
  render() {
    return  <div className="App">
                <Route exact path='/' render = {props => <Home {...props} />} />        
            </div>
  }
}

export default App;
