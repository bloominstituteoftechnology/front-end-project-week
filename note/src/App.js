import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: 'example 1',
          textBoday: 'textBoday 1'
        },
        {
          id: 1,
          title: 'example 2',
          textBoday: 'textBoday 2'
        }
      ]
    }
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
