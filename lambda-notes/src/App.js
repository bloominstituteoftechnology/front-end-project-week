import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import './App.css';
// import { notesData } from './notesData';
import { NoteList } from './components/notesContainer';
import Route from 'react-router-dom/Route';
import { SingleView } from './components/noteView';
import { AddNote } from './components/addNote';
import  EditNote  from './components/editNote';
import axios from 'axios';

// const url = 'http://localhost:3333/api/notes';
const url = 'https://lambdanote.herokuapp.com/api/notes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      id: '',
      title: '',
      text: '',
      showModal: false,
      searchQuery: '',
      searchResults: [],
      showFiltered: false
    }
  }

  componentDidMount(){
    axios.get(`${url}`).then(response => {
      console.log(response);
      this.setState({
        notes: response.data,
      });
    });

    // this.setState({ 
    //   notes: notesData,
    //  })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  filterNotes = (event) => {
    let filtered = this.state.notes.filter(note => 
    note.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
    note.text.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({
      // searchQuery: '',
      searchResults: filtered
    });
  }

  addNewNote = event => {
    event.preventDefault();
    axios.post(`${url}`, {
      title: this.state.title,
      text: this.state.text
    })
      .then(response => {
        axios.get(`${url}`).then(response => {
          this.setState({ notes: response.data })
        })
      })

    // const notes = this.state.notes.slice();
    // notes.push({ 
    //   id: Number(Date.now().toString().slice(-2)), 
    //   title: this.state.title, 
    //   text: this.state.text 
    // });
    this.setState({  
      id: '',
      title: '',
      text: '' ,
      searchResults: []
    });
  }

  editNoteSubmit = (noteID, title, text) => {
    console.log(noteID);
    axios.put(`${url}/${noteID}`, {
      title: title,
      text: text
    })
      .then(response => {
        axios.get(`${url}`).then(response => {
          this.setState({ notes: response.data, searchResults: [] })
        })
      })
    // this.setState(function (prevState) {
    //   return {
    //     notes: prevState.notes.map(note => noteID === note.id ? {id: noteID, title, text} : note )
    //   }
    // });
  }

  deleteNote = id => {
    axios
      .delete(`${url}/${id}`)
      .then(response => {
        axios.get(`${url}`).then(response => {
          this.setState({
            notes: response.data,
            searchResults: []
          });
        })
      })

    // let notes = this.state.notes.slice();
    // notes = notes.filter(note => note.id !== id);
    // this.setState({ notes, id: '', title: '', text: ''  });
  }

  modalToggle = () => {
    this.setState(function(prevState) {
      return {showModal: !prevState.showModal}
      })
      this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <div className="Nav-bar">
          <h1 className="App-title">Lambda <br/> Notes</h1>
          <Link to="/" ><div className="nav-button" >View Your Notes</div ></Link>
          <Link to="/add" ><div className="nav-button" >+ Create New Note</div></Link>
        </div>
        <div className="display-right" >
          <Route exact path="/" render={props => (<NoteList {...props} notes={this.state.notes} searchQuery={this.state.searchQuery} handleInputChange={this.handleInputChange} filterNotes={this.filterNotes} searchResults={this.state.searchResults} />)} />
          <Route exact path="/notes/:id" render={props => (<SingleView {...props} notes={this.state.notes} modalToggle={this.modalToggle} showModal={this.state.showModal} deleteNote={this.deleteNote} /> )} />
          <Route exact path="/add" render={props => (<AddNote {...props} notes={this.state.notes} handleInputChange={this.handleInputChange} inputTitle={this.state.title} inputText={this.state.text} addNewNote={this.addNewNote} /> ) } />
          <Route exact path="/notes/:id/edit" render={props => (<EditNote {...props} notes={this.state.notes} editNoteSubmit={this.editNoteSubmit} />)}  />
        </div>
      </div>
    );
  }
}

export default App;
