import React, { Component } from 'react';
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NotesList from './Components/NotesList'
import NewNote from './Components/NewNote'
import NotesNav from './Components/NotesNav'
import Note from './Components/Note'
import SingleNote from './Components/SingleNote'
import DeleteModal from './Components/DeleteModal'
import EditNote from './Components/EditNote'

import axios from 'axios'
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      notes: [],
      title: '',
      content: '',
      allNotes: true,
      newNote: false,
      fullNote: false,
      updateNote: false,
      deleteNote: false,

  }
  }



componentDidMount() {
  axios.get('http://localhost:4444/home')
  .then(response => {this.setState({notes: response.data})})
  .catch(err => console.log('There is a Note Error'))
}

  // clickForNewHandler = () => {
  //   this.setState ({
  //     allNotes: false,
  //     newNote: true,
  //     fullNote: false,
  //     updateNote: false,
  //     deleteNote: false,})
  // }

  // selectedHandler = (id) => {

  //   console.log(id)
  //   // axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
  //   // .then(response => this.setState({notes: response.data}))
  //   // .catch(err => console.log('There is a Note Error'))
  // }



  noHandler= (event) => {
    this.setState({deleteNote:false})
  }

  clickForAllHandler = () => {

    this.setState ({
      allNotes: true,
      newNote: false,
      fullNote: false,
      updateNote: false,
      deleteNote: false,})
  }

  render() {
    
    // let Modal = '';
    // if (this.state.deleteNote === true) {Modal = <DeleteModal noHandler={this.noHandler} notes={this.state.notes}/>}
    // else { Modal = ''}

    return (
      <div className='Main'>
        <NotesNav clickForAllHandler={this.clickForAllHandler} clickForNewHandler={this.clickForNewHandler} />
        <Route exact path="/home" render={(props) =>  <NotesList {...props} selectedHandler={this.selectedHandler} notes={this.state.notes} />} />
        <Route exact path="/new" render={(props) =>  <NewNote {...props} this={this} notes={this.state.notes} />} />
        <Route exact path="/note/edit/:id" render={(props) =>  <EditNote {...props} this={this} notes={this.state.notes} />} />
        <Route exact path="/note/:id" render={(props) =>  <SingleNote {...props} deleteHandler={this.deleteHandler} />} />

      </div>
    );
  }
}

export default App;
