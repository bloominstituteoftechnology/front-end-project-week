import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import SideBar from './components/SideBar';
import NoteView from './components/NoteView';

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
        <Route path="/list-view" render={props => 
          <NoteList {...props} notes={this.state.notes} />
        } />
        <Route path="/create-new" render={props =>
          <NewNote {...props} createNote={this.createNote} />
        } />
        <Route path="/notes/:id" render={props =>
          <NoteView {...props} notes={this.state.notes} />
        } />
      </div> 
    ) 
  }
}

export default App;
