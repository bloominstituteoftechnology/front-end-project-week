import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './App.css';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      title: '',
      textBody: '',
    }
  }

  componentDidMount(){
    this.getNotes();
  }

  getNotes = () => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response)
        this.setState({ notes: response.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <NavLink to="/">View Your Notes</NavLink>
        <NavLink to="/create">+Create New Note</NavLink>

        <Route exact path="/" render={props => <NotesList {...props} notes={this.state.notes}/>} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
