import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'

import NavBar from './components/NavBar';
import NotesList from './components/NotesList';
import Note from './components/Note';

import { AppWrapper } from './style'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({
        notes: res.data
      }))
      .catch(err => console.log(err))
  }
  render() {
    const { notes } = this.state;
    return (
      <AppWrapper>
        <NavBar />
        <Route 
          exact path ='/'
          render={props =>
            <NotesList
              {...props}
              notes={notes}
            />
          }
        />

        <Route
          exact path ='/note/:_id'
          render={props =>
            <Note
              {...props}
              notes={notes}
            />
          }
        />
      </AppWrapper>
    );
  }
}

export default App;
