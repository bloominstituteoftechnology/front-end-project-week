import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar'
import NoteList from './components/NoteList'

class App extends Component {
  constructor(){
    super();
    this.state={
      notes:[]
    };
  }
  componentDidMount(){
    this.fetchNotes();
  }

  fetchNotes = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data});
      })
      .catch(err => {
        console.log('Error', err)
      })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
