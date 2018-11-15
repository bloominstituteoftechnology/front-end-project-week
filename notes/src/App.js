import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ListView from './components/ListView/ListView'
import Sidebar from './components/Sidebar/Sidebar'
import CreateForm from './components/CreateForm/CreateForm'
import NoteView from './components/ListView/NoteView'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

    componentDidMount() {
      this.getNotes();
    }

    getNotes = () => {
      axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data })
        console.log(response.data)
      })
      .catch(err => console.log(err))
    }

    createNote = (title, text) => {
      axios.post('https://fe-notes.herokuapp.com/note/create', {
        title: title,
        textBody: text
      })
      .then(response => {
        this.getNotes();
      })
      .catch(err => console.log(err)) 
    }

 
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={(props) =>
          <ListView notes={this.state.notes} />
        } />
        <Route exact path='/create' render={(props) => <CreateForm createNote={this.createNote} />} />
        <Route exact path='/note/:id' render={(props) => <NoteView {...props} notes={this.state.notes} />} />
      </div>
    );
  }
}

export default App;
