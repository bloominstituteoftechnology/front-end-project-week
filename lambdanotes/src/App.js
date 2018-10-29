import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        list: [],
        note: {},
    }
  };

  componentDidMount() {

  };

  render() {
    return (
      <div className="App">
        NOTES
      </div>
    );
  };
};

export default App;
