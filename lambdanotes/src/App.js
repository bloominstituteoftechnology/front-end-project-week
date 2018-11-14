import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

import NotesList from './components/NotesList'

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [],
    }
  }

  componentDidMount(){
    axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
        this.setState({ notes: response.data })
    })
    .catch(err => {
      console.log("Fail to GET notes from server", err)
    })
  }
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Lambda Notes Components.
          </p>
            <NotesList notes={this.state.notes}/>
          <p>
            Edit View (update).
          </p>
          <p>
            Delete Modal
          </p>
        </header>
      </div>
    );
  }
}

export default App;
