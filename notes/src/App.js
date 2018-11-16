import React, { Component } from 'react';
import axios from 'axios';
//import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Notes  from './components/Notes';
import NoteForm from './components/NoteForm';

class App extends Component {
  state = {
    notes: [],
    note: {
      tags: [],
      title: "",
      textBody: "",
    }
  }

  componentDidMount(){
    axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({ notes: response.data, loading: false }))
    .catch(error => console.log(error));
  }

  changeHandler = event => {
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value
      }
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewNote = () => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', this.state.note)
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>Nav</h1>
        <h1>Notes</h1>
        <Notes notes={this.state.notes} />
        <NoteForm 
          addNewNote={this.addNewNote}
          changeHandler={this.changeHandler}
          note={this.state.note}
          notes={this.state.notes}
          handleInputChange={this.handleInputChange}
        />          
      </div>
    );
  }
}

export default App;
