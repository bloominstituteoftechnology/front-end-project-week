import React, { Component } from 'react';
import './App.css';
import {
  Route
} from "react-router-dom";
import axios from 'axios'
import Notes from './components/Notes'
import NoteForm from './components/NoteForm'
import NavBar from './components/NavBar'
import NoteView from './components/NoteView'
import EditNote from './components/EditNote'
import SearchBarContainer from './components/SearchBarContainer';

const url = new URL('https://fe-notes.herokuapp.com/note/')


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {

    const notes = JSON.parse(localStorage.getItem('notes')) || []
    this.setState({
      notes: notes,
      filteredNotes: notes
    })

    axios
    .get(`${url}get/all`)
    .then(res => {
      console.log(res.data);
      this.setState({
        notes: res.data
      })
    })
    .catch(err => console.log(err))
  }

  addNote = data => {
    axios
    .post(`${url}create`, data)
    .then(res => {
      console.log(res)
      return axios
      .get(`${url}get/all`)
      .then(res => {
        this.setState({
          notes:res.data
        })
      })
    })
    .catch(err => console.log(err))
  }

  deleteNote = id => {
    axios
    .delete(`${url}delete/${id}`)
    .then(res => {
      console.log(res);
      return axios
      .get(`${url}get/all`)
      .then(res => {
      this.setState({
        notes: res.data
      })
    })
    .catch(err => console.log(err))
  })
  }

  searchNotes(query){
    let notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(query) || note.textBody.toLowerCase().includes(query)
    });
    this.setState({
      notes: notes
    })
  }


  render() {

    return (
      <div className="App">
      <NavBar />
        <Route
        exact path='/'
        render={props => <SearchBarContainer searchNotes={this.searchNotes.bind(this)} {...props} />}
        />
        <Route 
        exact path='/'
        render={props => <Notes notes={this.state.notes} {...props} />}
        />
        <Route path='/note/:id'
        render={props => <NoteView notes={this.state.notes} deleteNote={this.deleteNote} {...props} />}
        />
        <Route path='/create' 
        render={props => <NoteForm addNote={this.addNote} {...props} />}
        />
        <Route path='/edit/:id'
        render={props => <EditNote notes={this.state.notes} {...props} />}
        />
      </div>
    );
  }
}


export default App;
