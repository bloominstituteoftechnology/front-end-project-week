import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Note from './components/Note';
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import NoteView from './components/NoteView.js';

class App extends Component {
  constructor(props){
    super()
    this.state = {
      notes: [],
      note: {
        title: '',
        body: ''
      },
      search: "",
      searching:false
    }
  }

  componentDidMount(){
    this.getNotes();
  }

  getNotes = () => {
    // const api = "http://localhost:7000" || "http://notes-api-lsp.herokuapp.com";
    axios
    .get("http://notes-api-lsp.herokuapp.com/api/notes")
    .then(response => this.setState({notes: response.data}))
    .catch(err => console.log(err))
  }
  postNote = (newNote) => {
    // const api = "http://localhost:7000" || "http://notes-api-lsp.herokuapp.com";

    axios
      .post("http://notes-api-lsp.herokuapp.com/api/notes", newNote)
      .then(response => {
        console.log(response)
        this.setState({ notes: [...this.state.notes, {...newNote, id: response.data}] })})
      .catch(err => {console.log(err)});
  }

  handleSearchInput= (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({searching:true});
    if(e.target.value === ""){
      this.setState({searching:false});
    }
  };


  render() {
    let filteredNotes = this.state.notes.filter(note => {
      if(this.state.searching){
      return note.title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
      }else{
        return note
      }
    })
  
    return (
      <div className="App">
        <SideBar handleSearchInput={this.handleSearchInput} notes={this.state.notes} search={this.state.search}  />
        <Route exact path="/" render={(props) => <Notes {...props} notes={filteredNotes} />} />
        <Route path="/add-note" render={(props)=> <NoteForm {...props} postNote={this.postNote} note={this.state.note} />}/>
        <Route path="/note/:id" render={(props) => <NoteView {...props} notes={this.state.notes} getNotes={this.getNotes} getNote={this.getNote} />} />
      </div>
    );
  }
}

export default App;
