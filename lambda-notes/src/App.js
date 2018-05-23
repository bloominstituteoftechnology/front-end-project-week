import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import NotesList from './Notes/NotesList'
import { Route } from 'react';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import notes from './notes.js';

import Header from './Components/header';
import NavBar from './Components/navBar';
class App extends Component {
  state = {
    notes: []
  }

  render() {
    return (
      <div className="App">

        <Header title='List View' />

        <NavBar />


      </div>
    );
  }
}

export default App;