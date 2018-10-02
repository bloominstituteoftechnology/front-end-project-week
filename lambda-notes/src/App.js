import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/NavBar';
import Notes from './Components/Notes';
import NoteForm from './Components/NoteForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        id: '',
        title: '',
        textBody: ''
      }
    };
  }

  componentDidMount() {
    axios 
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data});
      })
      .catch(error => (
        console.log('Server Error', error)
      ));
  }

  addNote = note => {
    axios 
      .post('https://killer-notes.herokuapp.com/note/create', note)
      .then(response => {
        this.setState(
          {notes: response.data},
          this.props.history.push('/')
        );
      })
      .catch(error => (
        console.log('Server Error', error)
      ));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route 
          exact path='/' 
          render={props => <Notes {...props} notes={this.state.notes} />}
        />
        <Route
          path='/new'
          render={props => <NoteForm {...props} addNote={this.addNote} />}
        />
      </div>
    );
  }
}

export default App;
