import React, { Component } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import NavBar from './components/NavBar'
import NoteCard from './components/NoteCard'
import UpdateForm from './components/UpdateForm'
// import DeleteNote from './components/DeleteNote'
import {Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        notes: [].reverse()
      }

  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({notes: res.data}))
      .catch(error => console.log(error))
    //axios stuff here
  }



//this doesn't work anymore. I moved it to the note form. It redirects to the new note view.
 createNote = (noteData) => {
     axios
      .post('https://fe-notes.herokuapp.com/note/create', noteData ) 
      .then(res => this.props.history.push(`/note/${res.data.success}`))
      .catch(err => console.log(err))
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({notes: res.data}))
      .catch(error => console.log(error))

  }

 deleteNote = (noteId) => {
   axios
     .delete(`https://fe-notes.herokuapp.com/note/delete/${noteId}`)
     .then(res => this.refreshNotes())
     .catch(err => console.log(err))
 }


 refreshNotes = () => {
    console.log('refresh notes called but it is not working')
    // axios
    //   .then(res => this.setState({notes: res.data}))
    //   .catch(error => console.log(error))
 }



  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path={'/'} render={(props) => <NoteList notes={this.state.notes} />} />
        <Route path={'/newNote'} render={(props) => <NoteForm {...props}  createNote={this.createNote} updateNote={this.updateNote} refreshNotes={this.refreshNotes}/>} />
        <Route path={'/note/:id'}  render={(props) => <NoteCard {...props} notes={this.state.notes} deleteNote={this.deleteNote} refreshNotes={this.refreshNotes} />  }/>
        <Route path={'/updateForm/:id'} component={UpdateForm} refreshNotes={this.refreshNotes} />
      </div>
    );
  }
}

export default App;
