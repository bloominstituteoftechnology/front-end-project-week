import React, { Component } from 'react';
import Nav from './navigation';
import Front from './front-page'
import './style/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Front />
      </div>
    );
  }
}

export default App;
