import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Combine into a single file at end
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';
import InputForm from './components/inputForm/inputForm.js';
import Display from './components/display/display.js';


class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">

      <Header title='List View' />  
      <NavBar />
      <InputForm header='Your Notes: ' />

      
      
      <Header title='Create New View' />
      <NavBar />
      <InputForm header='Create New Note: ' />

      <Header title='Edit View' />
      <NavBar />
      <InputForm header='Edit Note: ' />
      
      <Header title='Note View' />
      <NavBar />
      <Display header='Header' title='Title' body='body' />
      

      </div>
    );
  }
}

export default App;
