import React, { Component } from 'react';
import axios from 'axios';
//import { Route, NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {
  state = {
    notes: [],
    note: {
      tags: [],
      title: "",
      textBody: "",
    }
  }

  componentDidMount(){
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({ notes: response.data, loading: false }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>Nav</h1>
        <h1>Notes</h1>
        {this.state.notes.map(note => {
          return (
            <div>
              <h2>{note.tags}</h2>
              <h3>{note.title}</h3>
              <p>{note.textBody}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
