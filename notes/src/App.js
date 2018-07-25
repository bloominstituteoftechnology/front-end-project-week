import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Notes from './components/Notes/Notes.js';
import axios from 'axios';
import CreateNote from './components/CreateNote/CreateNote.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({notes: response.data})
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={props => <Notes {...props} notes={this.state.notes}/>}/>
        <Route path="/create" component={CreateNote} />
      </div>
    );
  }
}

export default App;
