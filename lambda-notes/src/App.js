import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import SideBar from './components/SideBar';

class App extends Component {
  state={
    notes: [
      {
        id:'1537900213158',
        title: 'Hard Coded Testing',
        content: 'falsdjflkajdflkjasdl;fjadslk;jf',
      }
    ]
  }

  createNote = newNote => {
    this.setState({notes:[...this.state.notes, newNote]})
  }

  render(){
    return(
      <div className="App">
        <SideBar />
        <Route exact path='/' render={props => 
          <NoteList {...props} notes={this.state.notes} />
        } />
        <Route path='/new-note' render={props =>
          <NewNote {...props} createNote={this.createNote} />
        } />
      </div> 
    ) 
  }
}

export default App;
