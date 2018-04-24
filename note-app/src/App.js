import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Combine into a single file at end
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';
import InputForm from './components/inputForm/inputForm.js';


class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">

      <Header title='List View' />
      
      <NavBar />
      
      <InputForm header='Create New Note: ' />
      <InputForm header='Edit Note: ' />

      </div>
    );
  }
}

export default App;
