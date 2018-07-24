import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ListView from './components/PageViews/ListView';
import notesData from './notes-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: notesData });
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ListView />
      </div>
    );
  }
}

export default App;
