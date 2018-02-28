import React, { Component } from 'react';
import Notes from './Components/Notes';
import AddNote from './Components/AddNote';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  componentWillMount() {
    this.setState({notes: [
        {
          id: 0,
          title: 'Note Title',
          description: 'I am the first note'
        },
        {
          id: 1,
          title: 'Note Title',
          description: 'I am the second note'
        },
        {
          id: 2,
          title: 'Note Title',
          description: 'I am the third note'
        },
        {
          id: 3,
          title: 'Note Title',
          description: 'I am the fourth note'
        },
        {
          id: 4,
          title: 'Note Title',
          description: 'I am the fifth note'
        }
    ]});
  }
  
  render() {
    return (
      <div className="app">
        <div className="left-column">
          <h1>Lambda Notes</h1>
          <button>View Your Notes</button>
          <AddNote />
        </div>
        <div className="right-column">
          <h2>Your Notes:</h2>
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
