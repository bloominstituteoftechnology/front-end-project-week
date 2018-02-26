import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import NoteList from './NoteList';

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: 'Note 1',
        body: 'Words and stuff.',
      },
      {
        id: 1,
        title: 'Note 2',
        body: 'Words and stuff.',
      },
      {
        id: 2,
        title: 'Note 3',
        body: 'Words and stuff.',
      },
    ],
  };

  render() {
    return (
      <Router>
        <div>
            <Sidebar />
            <Route path={"/"} render={()=><NoteList notes={this.state.notes} />} />
        </div>
      </Router>
    );
  }
}

export default App;
