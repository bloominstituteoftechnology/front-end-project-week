import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import './App.css';

class App extends Component {
  state = {
    mainPageTitle: '',
    mainPageSwitch: '',
  };

  render() {
    return (
      <div className="App">
        <div className="App__leftbox">
          <NavBar />
        </div>
        <div className="App__rightbox">
          <MainPage title={this.state.mainPageTitle} value={this.state.mainPageSwitch} />
        </div>
      </div>
    );
  }
}

export default App;
