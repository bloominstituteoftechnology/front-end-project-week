import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import YourNotes from './components/YourNotes/YourNotes.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      notes:[],
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-sidebar">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Notes</h1>
          <button className='sidebar-button'>View Your Notes</button>
          <button className='sidebar-button'>+ Create New Note</button>
        </header>
        <Route exact path='/' component={YourNotes} />
        {/* <YourNotes 
          notes={this.state.notes}
        /> */}
      </div>
    );
  }
}

export default App;
