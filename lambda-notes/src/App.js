import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import NotesList from './components/NotesList';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
            <Sidebar />
            <NotesList notes={this.state.notes}/>
        </div>

      </div>
    );
  }
}

export default App;
