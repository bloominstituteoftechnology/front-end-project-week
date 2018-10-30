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

  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
         .then(res => this.setState({
           notes: res.data
          }))
         .catch(err => console.log(err))
  }

  componentDidUpdate() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => this.setState({
      notes: res.data
     }))
    .catch(err => console.log(err))
  }

  render() {
    
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
