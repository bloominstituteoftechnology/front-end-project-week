import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';

import Note from './Components/Note';
import NoteList from './Components/NoteList';
import Menu from './Components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  render() {
    return (
      <div className="App">
      {/*   <NoteList notes = {this.state.notes} />
        <Menu /> */}
        <Route exact path='/' component={NoteList} />
        <Route path='/notes/_id' component={Note} />
      </div>
    );
  }
}

export default App;
