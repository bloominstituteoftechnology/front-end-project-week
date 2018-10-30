import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Form from './components/Form';
import Nav from './components/Nav';
import FullPageNote from './components/FullPageNote'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }
  }

  // brings in the notes from the server
  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
         .then(res => this.setState({
           notes: res.data
          }))
         .catch(err => console.log(err))
  }

  // brings in the notes from the server (mindful of updates)
  componentDidUpdate() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => this.setState({
      notes: res.data
     }))
    .catch(err => console.log(err))
  }

  render() {
    // Just some basic routes with render props. The only real prop passed down is notes from state (from the server).
    return (
      <div className="App">
        <Nav/>

        <Route
          exact path="/"
          render={props => (
            <Notes {...props} notes={this.state.notes} />
          )} 
        />

        <Route
          path="/notes/:id"
          render={props => (
            <FullPageNote {...props} />
          )}
        />

        <Route
          path="/add"
          render={props => (
            <Form {...props} />
          )} 
        />
      </div>
    );
  }
}

export default App;
