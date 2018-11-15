import React, { Component } from 'react';
import './App.css';
import Sidebar from './containers/Note/Sidebar';
// import axios from 'axios'
import {Route } from 'react-router-dom'
import NoteList from './containers/Note/NoteList';
import notes from './data'
import NotePage from './containers/Note/NotePage';
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
        <Route exact path='/' render={props => (
          <NoteList {...props} notes={this.state.notes} />
        )} />
        <Route path='/note/:id' render={props => (
          <NotePage {...props} notes={this.state.notes} />
      )}/>
  </div>

    );
  }
}

export default App;
