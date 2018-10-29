import React, { Component } from 'react';
import './App.css';
// import {NoteData} from './NoteData';
import Notes from './components/Notes';
import Form from './components/Form';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      body: '',
    }
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
         .then(res => this.setState({
           notes: res.data
          }))
         .catch(err => console.log(err))
  }

  componentDidUpdate() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => this.setState({
      notes: res.data
     }))
    .catch(err => console.log(err))
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitHandler = event => {
    event.preventDefault();
    if (this.state.title !== '' && this.state.body !== '') {
      const newNote = {
        tags: [],
        title: this.state.title,
        textBody: this.state.body,
      }

      axios.post('https://killer-notes.herokuapp.com/note/create', newNote)
           .then(res => {         
              console.log(res);
           })
           .catch(err => console.log(err))
           this.setState({
              title: '',
              body: '',
           })
      alert('Note saved. Please navigate home.')
    }
    else {
      alert('Please fill out the form!')
    }
    event.target.reset();
  }

  deleteHandler = id => {
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
         .then(res => {console.log(res)})
         .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route
          exact path="/"
          render={props => (
            <Notes {...props} notes={this.state.notes} deleteHandler={this.deleteHandler}/>
          )} 
        />
        <Route
          path="/add"
          render={props => (
            <Form {...props} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
          )} 
        />
      </div>
    );
  }
}

export default App;
