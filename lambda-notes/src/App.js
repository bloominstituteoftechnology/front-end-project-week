import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: 'This is my first note!',
          text: 'This is a first note in lambda-notes project!'
        },
        {
          id: 1,
          title: 'This is my second note!',
          text: 'This is a second note in lambda-notes project!'
        },
        {
          id: 2,
          title: 'This is my third note!',
          text: 'This is a third note in lambda-notes project!'
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Nav/>
        <List notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
