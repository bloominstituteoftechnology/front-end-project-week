import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards.js';
import Input from './Components/Input.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    alert('It was Submitted' + this.state.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div>
          <h2> Your Notes </h2>
          <Cards />
          <Input 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
