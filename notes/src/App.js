import React, { Component } from 'react';

//components needed
import HeadNav from './components/HeadNav/HeadNav';
import MainView from './components/MainView/MainView';

//page styling
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeadNav />
        <MainView />

      </div>
    );
  }
}

export default App;
