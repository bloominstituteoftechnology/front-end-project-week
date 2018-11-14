import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import List from './Components/List';

class App extends Component {
  constructor() {
  super();
    this.state = {

    }
}

  render() {
    return (
      <div className = "App">
        <Route exact path = "/" component = {List}/>
      </div>
    ) 
  }
}

export default App;
