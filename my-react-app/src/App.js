import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import NewNote from './components/NewNote';
import DeleteNote from './components/DeleteNote'
import Notes from './components/Notes'
import {Link, Route} from 'react-router-dom'

class App extends Component {
  state = {
    Notes: [],
  }

  componentDidMount(){
    this.setState({Notes})
  }

  AddNote = note => {

  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NotesList}/>
        <Route path="/NewNote" component={NewNote}/>
      </div>  
    
    );
  }
}

export default App;
