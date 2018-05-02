import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getNotes } from './actions';
import { connect } from 'react-redux';
import Notes from './components/Notes';
import NewNote from './components/NewNote';



class App extends Component {


  render() {
    return (
      <div className="App">
      <div>
        <h3>Lambda Notes</h3>
        <div>
          <button className="Button1">View Your Notes</button>
        </div>
        <div>
          <button className="Button1">+ Create New Note</button>
        </div>
      </div>
        <div>Your Notes</div>
        <Notes />
      </div>
    );
  }
}

export default App;
