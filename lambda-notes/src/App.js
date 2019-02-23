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
  _isM = false;
  constructor (props) {
    super(props);

    this.state = {
      notes: [],
      title: '',
      textBody: '',
      allNotes: true,
      newNote: false,
      fullNote: false,
      updateNote: false,
      deleteNote: false,

  }
  }

  
  componentDidMount() {
    this._isM = true;

    axios.get('http://localhost:4444/home')
    .then(response => {this.setState({notes: response.data});
    console.log(`App.js ComponentDidMount`, response)})
    .catch(err => console.log('There is a Note Error'))
}

  componentWillUnmount() {
    this._isM = false;

  }

  // componentDidUpdate() {
  //   axios.get('http://localhost:4444/home')
  //   .then(response => this.setState({notes: response.data}))
  //   .catch(err => console.log('There is a Note Error'))}


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

  deleteNote = (id) => {
    axios.delete(`http://localhost:4444/note/${id}`)
    .then(response => {
      if (this._isM = true){
        console.log(`notes from state`, this.state.notes)
        console.log(`id`, id)
        console.log(`id type`, typeof(id))


        let notes = this.state.notes.filter( note => note.id !== Number(id))
        this.setState({notes: notes});

      };
    console.log(id)})
    .then ( response => this.setState({deleteNote:false}))
    .catch(err => console.log(err))
    
  }

  // homeHandler = () => {
  //   console.log(window.location)
  //   }

  // noHandler= (event) => {
  //   this.setState({deleteNote:false})
  // }

  // clickForAllHandler = () => {

  //   this.setState ({
  //     allNotes: true,
  //     newNote: false,
  //     fullNote: false,
  //     updateNote: false,
  //     deleteNote: false,})
  // }

  inputHandler = (event) => {
    let value=event.target.value;
    let property= event.target.name;
    this.setState({[property]: value})
}

  addNote = (event) => {

  console.log('before notes', this.state.notes)
  const tags = this.state.tags;
  const title = this.state.title;
  const textBody = this.state.textBody;
  axios.post('http://localhost:4444/new', {title,textBody})
  .then( response => {this.setState({notes: [...this.state.notes, {id:response.data , title:title, textBody:textBody}]})

})
  .catch(err => console.log(err))
  }


  editNote = (id) => {
    let notesE = this.state.notes.filter( note => note.id !== Number(id))

    const title = this.state.title;
    const textBody = this.state.textBody;
    axios.put(`http://localhost:4444/note/edit/${id}`, {title,textBody})
    .then( response => 
      {this.setState({notes: [...notesE, {id:id , title:title, textBody:textBody}]})
    })
    .catch(err => console.log(err))

    axios.get(`http://localhost:4444/note/${id}`)
        .then(response => this.setState({note: response.data}))
        .catch (err => console.log(err))
  }

  deleteHandler= (event) => {
    this.setState({deleteNote: !this.state.deleteNote})
  }

  noHandler= (event) => {
    this.setState({deleteNote:false})
  }
  

  render() {
    // let Modal = '';
    // if (this.state.deleteNote === true) {Modal = <DeleteModal noHandler={this.noHandler} notes={this.state.notes}/>}
    // else { Modal = ''}

    return (
      <div className='Main'>
        <NotesNav clickForAllHandler={this.clickForAllHandler} clickForNewHandler={this.clickForNewHandler} />
        <Route exact path="/home" render={(props) =>  <NotesList {...props} selectedHandler={this.selectedHandler} notes={this.state.notes} />} />
        <Route exact path="/new" render={(props) =>  <NewNote {...props} this={this} inputHandler={this.inputHandler} addNote={this.addNote} notes={this.state.notes} />} />
        <Route exact path="/note/edit/:id" render={(props) =>  <EditNote {...props} this={this} editNote={this.editNote} inputHandler={this.inputHandler} notes={this.state.notes} />} />
        <Route exact path="/note/:id" render={(props) =>  <SingleNote {...props} deleteNote={this.deleteNote} DEL={this.state.deleteNote} noHandler={this.noHandler} this={this} deleteHandler={this.deleteHandler} />} />

      </div>
    );
  }
}

export default App;
