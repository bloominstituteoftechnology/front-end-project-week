import React, { Component } from 'react';
import './App.css';
import Notes from './components/Notes';
import Form from './components/Form';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import FullPageNote from './components/FullPageNote'

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
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
         .then(res => this.setState({
           notes: res.data
          }))
         .catch(err => console.log(err))
  }

  componentDidUpdate() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
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

      axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
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

  render() {
    return (
      <div className="App">
        <Nav />

        <Route
          exact path="/"
          render={props => (
            <Notes {...props} notes={this.state.notes}/>
          )} 
        />

        <Route
          path="/notes/:id"
          render={props => (
            <FullPageNote {...props}/>
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
