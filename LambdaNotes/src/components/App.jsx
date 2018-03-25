import React, { Component } from 'react';
import './App.css';

import SideBar from './SideBar';
import ContentContainer from './ContentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <ContentContainer />
        <SideBar />
      </div>
    );
  }
}

export default App;
