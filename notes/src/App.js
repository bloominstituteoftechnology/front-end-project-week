import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="Sidebar-container">
          <div className="Side-title">Lambda Notes</div>
          <button name="button1" type="button">View Your Notes</button>
          <br />
          <button name="button2" type="button">+ Create New Note</button>
        </div>
        <div className="Notes-section-container">
          <div className="Notes-title">Your Notes:</div>
          <div className="Notes-container">
            <div className="Box1 Notes">hi</div>
            <div className="Box2 Notes">hi</div>
            <div className="Box3 Notes">hi</div>
            <div className="Box4 Notes">hi</div>
            <div className="Box5 Notes">hi</div>
            <div className="Box6 Notes">hi</div>
            <div className="Box7 Notes">hi</div>
            <div className="Box8 Notes">hi</div>
            <div className="Box9 Notes">hi</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
