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
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {this.setState({notes: response.data});
    })
    .catch(err => console.log('There is a Note Error'))
}


  componentDidUpdate() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({notes: response.data}))
    .catch(err => console.log('There is a Note Error'))}


  clickForNewHandler = () => {
    this.setState ({
      allNotes: false,
      newNote: true,
      fullNote: false,
      updateNote: false,
      deleteNote: false,})
  }

  selectedHandler = (id) => {

    axios.get(`https://fe-notes.herokuapp.com/note/${id}`)
    .then(response => this.setState({notes: response.data}))
    .catch(err => console.log('There is a Note Error'))
  }

  deleteNote = (id) => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      if (this._isM = true){

        let notes = this.state.notes.filter( note => note.id !== Number(id))
        this.setState({notes: notes});

      };
    console.log(id)})
    .then ( response => this.setState({deleteNote:false}))
    .catch(err => console.log(err))
    
  }



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

  inputHandler = (event) => {
    const updateBTN = document.getElementsByClassName("update")[0];

    let value=event.target.value;
    let property= event.target.name;
    updateBTN.disabled = true;
    if (value === '') {
      updateBTN.disabled = true;
      event.target.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    }
    else {

      this.setState({[property]: value})
      updateBTN.disabled = false
      event.target.style.backgroundColor = "white";

    }
}

  // inputHandler2 = (event) => {
  //     let value1 = document.getElementsByTagName('INPUT') || ""
  //     let value2 = document.getElementsByClassName('value') || ""

  //     let valueOne=value1[0].value;
  //     let valueTwo=value2[0].value;
  //     this.setState({[value1[0].name]: valueOne, [value2[0].name]: valueTwo})
  // }


  addNote = (event) => {

  const tags = this.state.tags;
  const title = this.state.title;
  const textBody = this.state.textBody;
  axios.post(' https://fe-notes.herokuapp.com/note/create', {title,textBody})
  .then( response => {this.setState({notes: [...this.state.notes, {id:response.data , title:title, textBody:textBody}]})

})
  .catch(err => console.log(err))
  }


  editNote = (id) => {
    const title = document.getElementsByTagName("INPUT")[0].value
    const textBody = document.getElementsByTagName("TEXTAREA")[0].value;
    if (title === '' || textBody === '') {
      console.log('no blanks!')
    }
    else {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {title,textBody})
    .then( response => 
      {this.setState({notes: [...this.state.notes, {id:id , title:title, textBody:textBody}]})
    })
    .then(()=> {
      axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => this.setState({note: response.data}))
      .catch (err => console.log(err))
    })
    .catch(err => console.log(err))
  }
  }

  deleteHandler= (event) => {
    this.setState({deleteNote: !this.state.deleteNote})
  }

  noHandler= (event) => {
    this.setState({deleteNote:false})
  }
  

  render() {
    let Modal = '';
    if (this.state.deleteNote === true) {Modal = <DeleteModal noHandler={this.noHandler} notes={this.state.notes}/>}
    else { Modal = ''}

    return (
      <div className='Main'>
        <NotesNav clickForAllHandler={this.clickForAllHandler} DEL={this.state.deleteNote} clickForNewHandler={this.clickForNewHandler} />
        <Route exact path="/home" render={(props) =>  <NotesList {...props} selectedHandler={this.selectedHandler} notes={this.state.notes} />} />
        <Route exact path="/new" render={(props) =>  <NewNote {...props} this={this} inputHandler={this.inputHandler} addNote={this.addNote} notes={this.state.notes} />} />
        <Route exact path="/note/edit/:id" render={(props) =>  <EditNote {...props} this={this} editNote={this.editNote} inputHandler={this.inputHandler} notes={this.state.notes} />} />
        <Route exact path="/note/:id" render={(props) =>  <SingleNote {...props} deleteNote={this.deleteNote} DEL={this.state.deleteNote} noHandler={this.noHandler} this={this} deleteHandler={this.deleteHandler} />} />

      </div>
    );
  }
}

export default App;
