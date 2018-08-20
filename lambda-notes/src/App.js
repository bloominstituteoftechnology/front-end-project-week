import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NotesNav from './components/NotesNav';
import Notes from './components/Notes';
import NewNote from './components/NewNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: "Note 0",
          content: "Lorem ipsum dolor sit amet."
        },
        {
          id: 1,
          title: "Note 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
        },
        {
          id: 2,
          title: "Note 2",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
        },
        {
          id: 3,
          title: "Note 3",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
        }
      ],
      name: '',
      age: '',
      height: ''

    }
  }
  render() {
    return (
      <div className="App">
        <NotesNav />
        <div className="main">
          <Route
            path="/notes"
            render={(props) => <Notes {...props} notes={this.state.notes} />}
          />
          <Route
            path="/add"
            render={(props) => <NewNote {...props} notes={this.state.notes} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
