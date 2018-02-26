import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__leftbox">
          <NavBar />
        </div>
        <div className="App__rightbox">
          <MainPage />
        </div>
      </div>
    );
  }
}

export default App;
