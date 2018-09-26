import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import { Route } from 'react-router-dom';
import NoteList from './components/NoteList';



class App extends Component {

  render() {
    return (
      <div className='App'>
        <Nav />
        <Route exact path='/' render={() => <NoteList />}/>
        <Route exact path='/notes/:_id' render={props => <Note {...props} toggleDelete={this.toggleDelete} deleteNote={this.deleteNote}/>} />
        <Route exact path='/notes/:_id/edit' component={EditNote} />
        <Route exact path="/create" render={props => <CreateNote {...props} />} /> 
      </div>
    );
  }
}

export default App;
