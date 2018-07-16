import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { data } from './NoteData';
// import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import ViewNote from './components/ViewNote';
import './App.css';
// import axios from 'axios';

// const URL = "http://localhost:3000/"


class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  // handleSetData = () => {
  //   axios
  //   .get(URL)
  //   .then(response => {
  //     console.log("GET RESPONSE: ", response);
  //     this.setState({ notes: response.data });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  componentDidMount() {
    this.setState({ notes: data })
  }

  render() {
    return (
      <div className="App">
      {/* <Route exact path='/' component={NoteList} /> */}
      {this.state.notes.map(note => {
        return <NoteList key={note.id} note={note} /> 
      })}
      </div>
    );
  }
}

export default App;
