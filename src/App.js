import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Form from './components/Form';
import Nav from './components/Nav';
import FullPageNote from './components/FullPageNote'
import Login from './components/Login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      toSort: false,
      username: '',
    }
  }

  // brings in the notes from the server
  componentDidMount() {
    const notes = this.state.toSort ? 'https://vellumnotes.herokuapp.com/note/get/all/sort' : 'https://vellumnotes.herokuapp.com/note/get/all';
      axios.get(notes)
      .then(res => this.setState({
        notes: res.data
       }))
      .catch(err => console.log(err))
  }

  // brings in the notes from the server (mindful of updates)
  componentDidUpdate() {
    const notes = this.state.toSort ? 'https://vellumnotes.herokuapp.com/note/get/all/sort' : 'https://vellumnotes.herokuapp.com/note/get/all';
      axios.get(notes)
        .then(res => this.setState({
          notes: res.data
        }))
        .catch(err => console.log(err))
  }

  submitHandler = username => {
    if (username !== '') {
      this.setState({username: username})
    }
    else {
      alert('Please log in.')
    }
  }

  sorter = event => {
    if (event.target.checked) {
      this.setState({
        toSort: true
      })
    } else {
      this.setState({
        toSort: false
      })
    }
  }

  render() {
    // Just some basic routes with render props. The only real prop passed down is notes from state (from the server).
    if (this.state.username === '') {
      return(
        <Login submitHandler={this.submitHandler}/>
      )
    }

    return (
      <div className="App">
        <Nav/>

        <Route
          exact path="/"
          render={props => (
            <Notes {...props} notes={this.state.notes} sorter={this.sorter}/>
          )} 
        />

        <Route
          path="/notes/:id"
          render={props => (
            <FullPageNote {...props} />
          )}
        />

        <Route
          path="/add"
          render={props => (
            <Form {...props} />
          )} 
        />
      </div>
    );
  }
}

export default App;