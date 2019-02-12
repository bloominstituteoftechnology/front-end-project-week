import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <Sidebar />
        </aside>

      </div>
    );
  }
}

export default App;
