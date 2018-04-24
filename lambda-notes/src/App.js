import React, { Component } from 'react';
import PageNavigator from './components/PageNavigator';
import { lambdaNotes } from './components/MyNotes';
import { NoteList } from './components/NoteList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      Notes: [],
    };
  }

  componentDidMount() {
    this.setState({ Notes: lambdaNotes })
  }

  render() {
    return (
      <div className="app-wrapper">
          <PageNavigator />
          <NoteList Note={this.state.Notes} />
      </div>
    );
  }
}

export default App;
