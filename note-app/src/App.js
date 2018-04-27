import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Combine Component Imports into a single file at end
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';
import InputForm from './components/inputForm/inputForm.js';
import Display from './components/display/display.js';
import Home from './components/home/home.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: '', 
      todos: [
        'Note 1',
        'Note 2',
        'Note 3',
        'Note 4'
      ]
    }
  }

  render() {
    return (
      <div className="App">

        <Route exact path='/' title='List View' component={Header} />
        <Route exact path='/' component={Home} />


        <Route exact path='/new' component={Header} />
        <Route exact path='/new' component={InputForm} />


        <Route exact path='/edit' component={Header} />
        <Route exact path='/edit' component={InputForm} />

        <Route exact path='view' component={Header} />

        <Route path='/note' component={Header} />
        <Route path='/note' component={Display} />


        <Route path='/' component={NavBar} />
      </div>
    );
  }
}

export default App;
