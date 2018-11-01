import React, { Component } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import NoteCard from './components/NoteCard'
import UpdateForm from './components/UpdateForm'

// import DeleteNote from './components/DeleteNote'
import {Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        notes: [],
        search: ''
      }

  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({notes: res.data}))
      .catch(error => console.log(error))
    //axios stuff here
  }



 createNote = (noteData) => {
     console.log('this is create from app.js')
     axios
      .post('https://fe-notes.herokuapp.com/note/create', noteData ) 
      //this is a temporary update of state. When you reload you will get a full update.
      .then(res => this.setState({notes: [...this.state.notes, {...noteData, _id: res.data.success, _v: 0}]}))
      // .then(res => this.props.history.push(`/note/${res.data.success}`))
      .catch(err => console.log(err))
  }

 deleteNote = (noteId) => {
   axios
     .delete(`https://fe-notes.herokuapp.com/note/delete/${noteId}`)
     .then(res => this.refreshNotes())
     .catch(err => console.log(err))
 }

 updateNote = (noteData) => {
   let removeItem = this.state.notes.filter(item => noteData._id !== item._id )
 
 //   console.log('filtered item:', removeItem)
 //   console.log('this is edited note:', noteData)
   let newArray = [...removeItem, noteData]
   // console.log('new array', newArray)
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${noteData._id}`, noteData)
      .then(res => this.setState({notes: newArray}))
      // .then(res => console.log(res))
      .catch(err => console.log(err))


 }


 refreshNotes = (newNote) => {
   // this.setState({notes: [...this.state.notes, newNote]})
    // console.log('refresh notes called ')
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({notes: res.data}))
      .catch(error => console.log(error))
 }

 search = (searchData) => {
   let stateCopy = this.state.notes
   if(searchData.length > 0) {
     this.setState({notes: this.state.notes.filter(item => item.title.includes(searchData))})
   } else {
     this.setState({notes: stateCopy})
   }
 }



  render() {
    return (
      <div className="App">
        <Route path={'/'} render={(props) => <NavBar {...props} search={this.search}/>} />
        <Route exact path={'/'} render={(props) => <NoteList notes={this.state.notes} />} />
        <Route path={'/newNote'} render={(props) => <NoteForm {...props}  createNote={this.createNote} updateNote={this.updateNote} refreshNotes={this.refreshNotes}/>} />
        <Route path={'/note/:id'}  render={(props) => <NoteCard {...props} notes={this.state.notes} deleteNote={this.deleteNote} refreshNotes={this.refreshNotes} />  }/>
        <Route path={'/updateForm/:id'} render={(props) => <UpdateForm {...props} updateNote={this.updateNote} />}  />
      </div>
    );
  }
}

export default App;
