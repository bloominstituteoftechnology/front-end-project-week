import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ListView from './components/ListView/ListView'
import Sidebar from './components/Sidebar/Sidebar'
import CreateForm from './components/CreateForm/CreateForm'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

    componentDidMount() {
      axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(err => console.log(err))
    }

    createNote = (title, text) => {
      axios.post('https://fe-notes.herokuapp.com/note/create', {
        title: title,
        textBody: text
      })
      .then(response => {
        console.log(response)
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

        <Route eact path='/create' render={(props) => <CreateForm createNote={this.createNote} />} />


      </div>
    );
  }
}

export default App;
