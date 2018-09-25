import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import { Route } from 'react-router-dom';
import NoteList from './components/NoteList';
import DeleteConfirm from './components/DeleteConfirm'


class App extends Component {
  state = {
    notes: [],
    fetching: false,
    deleteConfirm: false
  }

  toggleDelete = () => {
    this.setState({ deleteConfirm: !this.state.deleteConfirm})
  }

  componentDidMount() {
    this.setState({
      fetching: true
    })
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({notes: response.data, fetching: false}))
    .catch(err => console.log(err))
  }

  handleDeleteConfirm = () => {
    this.setState({deleteConfirm: !this.state.deleteConfirm})
  }

  //navigation bar always shows, container will hold everything else and routes

  render() {
    return (
      <div className='App'>
        <Nav />
        <Route exact path='/'render={() => <NoteList notes={this.state.notes} />}/>
        <Route exact path='/notes/:_id' render={props => <Note {...props} toggleDelete={this.toggleDelete}/>} />
        <Route path='/notes/:_id/edit' component={EditNote} />
        <Route exact path="/create" render={props => <CreateNote {...props} />} /> 
        <Route exact path ='/notes/:_id/delete' render={props => <DeleteConfirm {...props} deleteConfirm={this.state.deleteConfirm} toggleDelete={this.toggleDelete}/>} />
      </div>
    );
  }
}

export default App;
