import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: 'Cookbook',
          content: 'How to make pasta'
        },
        {
          id: 1,
          title: 'Photography',
          content: 'Cameras used to take pics'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
