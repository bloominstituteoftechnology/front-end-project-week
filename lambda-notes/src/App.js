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
          title: 'Note',
          description: 'I am the first note'
        },
        {
          id: 1,
          title: 'Note2',
          description: 'I am the second note'
        },
        {
          id: 2,
          title: 'Note3',
          description: 'I am the third note'
        },
        {
          id: 3,
          title: 'Note4',
          description: 'I am the fourth note'
        }
    ]});
  }
  
  render() {
    return (
      <div>
        <h1>Lambda Notes</h1>
        <button>View Your Notes</button>
        <AddNote />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
