import React, { Component } from 'react';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  render() {
    return (
      <div>
        <Sidebar />
        <div>

        </div>
      </div>
    );
  }
}

export default App;
