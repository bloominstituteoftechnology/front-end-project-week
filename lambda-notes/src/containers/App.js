import React, { Component } from 'react';
import Sidebar from './Sidebar';
import NoteGrid from '../components/NoteGrid';
import initialState from '../initialState';
import './App.css';

class App extends Component {
  state = {
    initialState,
  }
  render() {
    return (
      <div className="container-fluid d-flex">
        <div className="row">
        <Sidebar />
          <NoteGrid notes={this.state.initialState}/>
        </div>
      </div>
    );
  }
}

export default App;
