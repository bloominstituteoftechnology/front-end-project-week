import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Notes from './components/Notes'
import CreateNote from './components/CreateNote';
import axios from 'axios';
import OneNote from './components/OneNote';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  componentDidMount = () => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`).then(response => {
      this.setState({ notes: response.data });
    });
  };

  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <HomePage {...props}/>} />
        <Route exact path="/notes" render={props => <Notes {...props} notes={this.state.notes} id={this.state.id}/>} />
        <Route path="/createnote" render={props => <CreateNote {...props} notes={this.state.notes}/>} />
        <Route path='/notes/id' render={props => <OneNote {...props}/>} />
      </div>
    );
  }
}

export default App;
