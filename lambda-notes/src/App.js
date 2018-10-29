import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import LeftBar from './components/LeftBar';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';

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
      .then(response => this.setState({notes: response.data}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={LeftBar}/>
        <Route render={props => (<NotesList {...props} notes={this.state.notes} />)} exact path='/'/>
        <Route render={props => (<AddNoteForm {...props} notes={this.state.notes} />)} exact path='/AddNoteForm'/>
      </div>
    );
  }
}

export default App;
