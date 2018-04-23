import React, { Component } from 'react';
import PageNavigator from './components/PageNavigator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
          <PageNavigator />
      </div>
    );
  }
}

export default App;
