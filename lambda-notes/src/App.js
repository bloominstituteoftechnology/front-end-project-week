import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NotesNav from './components/NotesNav';
import Notes from './components/Notes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: "Note 0",
          text: "Lorem ipsum dolor sit amet."
        },
        {
          id: 1,
          title: "Note 1",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
        },
        {
          id: 2,
          title: "Note 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
        },
        {
          id: 3,
          title: "Note 3",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
        }
      ]
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
        </div>
      </div>
    );
  }
}

export default App;
