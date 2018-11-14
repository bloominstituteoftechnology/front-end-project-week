import React, { Component } from 'react';
import './App.css';
import Sidebar from './containers/Note/Sidebar';
// import axios from 'axios'
import {Route } from 'react-router-dom'
import NoteList from './containers/Note/NoteList';
import notes from './data'
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      notes: [],
      title: '',
      textBody: '',
    }
  }
  componentDidMount() {
    this.setState({ notes: notes });
  }

  render() {
    return (

  <div className= 'App'>
        <Sidebar />
        <Route exact path='/' component={NoteList}/>
  </div>

    );
  }
}

export default App;
