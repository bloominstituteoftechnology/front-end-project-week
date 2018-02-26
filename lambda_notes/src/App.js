import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <MainPage />
        </div>
      </div>
    );
  }
}

export default App;
