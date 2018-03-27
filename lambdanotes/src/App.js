import React, { Component } from 'react';
//import noteData from './Notes'
import './styling/App.css'
import NavBar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
