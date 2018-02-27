import React, { Component } from 'react';
import './css/App.css';
import LeftRail from './containers/leftRail';
import CoreRail from './containers/coreRail';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftRail />
        <CoreRail />
      </div>
    );
  }
}

export default App;
