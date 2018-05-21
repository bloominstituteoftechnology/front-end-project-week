import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummyData';
import NotesContainer from './components/NotesContainer';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userNotes: []
  }
}

componentDidMount () {
  this.setState ({
    userNotes: dummyData
  })
}


  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Lambda Notes App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className = "Notes">
          {this.state.userNotes.map((note, index) => {
            return <NotesContainer key={index} note = {note}/>
          })}
        
        </div>
      </div>
    );
  }
}

export default App;
