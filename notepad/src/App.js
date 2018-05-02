import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getNotes } from './actions';
import { connect } from 'react-redux';
import Main from './components/Main';
import Notes from './components/Notes';
import NewNote from './components/NewNote';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 



class App extends Component {


  render() {
    return (
      <div className="App">
      <div>
        <h3>Lambda Notes</h3>
        <div>
          <SideBar/>
        </div>
      </div>
          <Main/>
      </div>
    );
  }
}

export default App;
