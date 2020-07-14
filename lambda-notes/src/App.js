import React, { Component } from 'react';
import './App.css';
import { ListContainer, Navigation } from './components';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='nav'>
          <Navigation />  
        </div>
        <div className='container'>
          <ListContainer />
        </div>
      </div>
    );
  }
}

export default App;