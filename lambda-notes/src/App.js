import React, { Component } from 'react';
import './App.css';
import { ListContainer, Navigation } from './components';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <ListContainer />
      </div>
    );
  }
}

export default App;