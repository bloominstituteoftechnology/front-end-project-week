import React, { Component } from 'react';

import ListView from './components/ListView';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <ListView />
      </div>
    );
  }
}

export default App;
