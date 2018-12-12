import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import NoteCard from './components/NoteCard';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      textBody: '',
      edittitle: '',
      edittextBody:'',
      isDeleting: false,
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }))
      })
      .catch(error => {
        console.log('Server Error', error)
      })  
  }

  componentDidUpdate() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then( response => {
        this.setState(() => ({ notes: response.data }))
      })
      .catch(error => { 
        console.log(error)
      })
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNote = () => {
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    }
    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch( error => console.log(error))
  }

  editHandler = (title, textBody) => {
    this.setState({ edittitle: title, edittextBody: textBody })
  }

  editNote = (id) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`,
      {
        title: this.state.edittitle,
        textBody: this.state.edittextBody,
      })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
    this.setState();
  }
    
  toggleDeleteOn = () => {
    this.setState({ isDeleting: true})
  }

  toggleDeleteOff = (event) => {
    event.preventDefault();
    this.setState({ isDeleting: false})
  }

  deleteNote = (event, id) => {
    event.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log('DELETE', response)
        this.setState({ note: response.data })
      })
      .catch( error => { console.log(error) })
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/"
        render={(props) => <NotesList {...props} notes={this.state.notes} />} />

        <Route path="/noteform" 
          render={props => <NoteForm {...props} /> }/>
        
        <Route path="/notecard/:id" 
          render={props => <NoteCard {...props} deleteNote={this.deleteNote} />} />

      </div>
    );
  }
}

export default App;
//