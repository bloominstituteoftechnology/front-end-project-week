import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import { Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import DeleteConfirm from './components/DeleteConfirm';
import axios from 'axios';


class App extends Component {
  state = {
    // deleteConfirm: false
  }

  // toggleDelete = () => {
  //   this.setState({ deleteConfirm: !this.state.deleteConfirm})
  // }

  // deleteNote = _id => {
  //   axios
  //   .delete(`https://killer-notes.herokuapp.com/note/delete/${_id}`)
  //   .catch(err => console.log(err))
  // } 

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
