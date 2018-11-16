import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NoteList from '../src/Components/NoteList';
import Menu from '../src/Components/Menu';
import Title from '../src/Components/Tite';
import NoteForm from '../src/Components/NoteForm';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: [],
    }
  }

  getNotes = event => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        console.log(response.data)
        this.setState({
          notes: response.data
        })
      })
      .catch(error => console.log('error!'))
  }

  componentDidMount() {
    this.getNotes()
  }

  newNote = note => {
    console.log('clicked')
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, note)
      .then(response => {
        this.setState({
          notes: this.getNotes()
        })
      })
      .catch(error => console.log('error!'))
  }

  render() {
    return (
      <div>
        <Title />
        <div className="App">
          <Route exact path='/' render={props => (
            <NoteList
              {...props}
              notes={this.state.notes}
            />
          )} />
          <Route exact path='/form' render={props => (
            <NoteForm
              {...props}
              newNote={this.newNote}
            />
          )} />
        </div>
      </div>
    );
  }
}

export default App;
