import React, {Component, Fragment} from 'react';
// import {Route} from 'react-router-dom';

// import './App.css';
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';

class App extends Component {
  state={
    notes: [
      {
        id:'1',
        title: 'Testing Note',
        content: 'falsdjflkajdflkjasdl;fjadslk;jf',
      }
    ]
  }

  createNote = newNote => {
    this.setState({notes:[...this.state.notes, newNote]})
  }

  render(){
    return(
      <Fragment className="App">
        <NoteList notes={this.state.notes} />
        <NewNote createNote={this.createNote} />
      </Fragment> 
    ) 
  }
}

export default App;
