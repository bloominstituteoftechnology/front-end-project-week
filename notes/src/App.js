import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import ListView from './components/NotesView/ListView';
import NewNote from './components/NotesView/NewNote';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  addNote = note => {
    const notes = this.state.notes.slice();
    notes.push(note);
   this.setState({notes: notes});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Sidebar />
          <div className="notes-view">
            <Route exact path="/" render={routeProps => <ListView {...routeProps} notes={this.state.notes} />} />
            <Route exact path="/new-note" render={routeProps => <NewNote {...routeProps} addNote={this.addNote}/>}/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
