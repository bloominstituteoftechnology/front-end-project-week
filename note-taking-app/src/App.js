import React, { Component } from 'react';
import './App.css';
import { data } from './component/Notes';
import { NoteList } from './component/NoteList';
 
class App extends Component {
  constructor() {
    super();
    this.state = {
    data: []
    };
  }

  componentDidMount() {
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="App">
      <h1>Your Notes:</h1>
        <NoteList data={this.state.data} />
      </div>
    );
  }
}

export default App;
