import React, { Component } from 'react';
import './css/App.css';
import LeftRail from './containers/leftRail';
import CoreRail from './containers/coreRail';


class App extends Component {
  state = {
    notes: [],
  }
  render() {
    return (
      <div className="App">
        <LeftRail />
        <CoreRail notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
