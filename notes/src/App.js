import React, { Component } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import NavBar from './components/NavBar'
import NoteCard from './components/NoteCard'
import {Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        notes: []
      }

  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({notes: res.data}))
      .catch(error => console.log(error))
    //axios stuff here
  }

  refreshData() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({notes: res.data}))
      .catch(error => console.log(error))
  }

 createNote = (noteData) => {
     axios
      .post('https://fe-notes.herokuapp.com/note/create', noteData ) 
      .then(res => console.log('from create note', res))
      // .then(res => this.setState({notes: res.data}) )
      .catch(err => console.log(err))
  }

 singleNote = (data) => {


 }


  render() {
    return (
      <div className="App">
        <Route exact path={'/'} render={(props) => <NoteList notes={this.state.notes} />} />
        <Route path={'/newNote'} render={(props) => <NoteForm {...props}  createNote={this.createNote}/>} />
        <NavBar />
        <Route path={'/note/:id'}  render={(props) => <NoteCard {...props} notes={this.state.notes} />  }/>
      </div>
    );
  }
}

export default App;
