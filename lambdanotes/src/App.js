import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Left-nav">
          <p className="Title">Lambda Notes</p>
          <Button color="info" size="sm" block>View Your Notes</Button>{' '}
          <Button color="info" size="sm" block>+ Create New Note</Button>{' '}
        </header>
      </div>
    );
        <header className="Right-nav">
        <h2 className="Title">Your Notes:</h2>
        </header>
  }
}

export default App;
