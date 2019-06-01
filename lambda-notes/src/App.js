import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
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
      searching:false,
      adding: false
    }
  }

  componentDidMount(){
    this.getNotes();
  }

  getNotes = () => {
    // const api = "http://localhost:7000" || "https://notes-api-lsp.herokuapp.com";
    axios
    .get( "https://notes-api-lsp.herokuapp.com/api/notes")
    .then(response => this.setState({notes: response.data}))
    .catch(err => console.log(err))
  }
  postNote = (newNote) => {
    // const api = "http://localhost:7000" || "https://notes-api-lsp.herokuapp.com";

    axios
      .post( "https://notes-api-lsp.herokuapp.com/api/notes", newNote)
      .then(response => {
        console.log(response)
        this.setState({ notes: [...this.state.notes, {...newNote, id: response.data}]})})
      .catch(err => {console.log(err)});
  }

  handleSearchInput= (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({searching:true});
    if(e.target.value === ""){
      this.setState({searching:false});
    }
  };
  
  addingOn = () =>{
    this.setState({adding:true})
  }

  addingOff = () =>{
    this.setState({adding:false});
    this.getNotes;  
}

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
        <SideBar handleSearchInput={this.handleSearchInput} notes={this.state.notes} search={this.state.search} adding={this.state.adding} addingOn={this.addingOn} />
        <Route exact path="/" render={(props) => <Notes {...props} notes={filteredNotes} />} />
        <Route path="/add-note" render={(props)=> <NoteForm {...props} postNote={this.postNote} note={this.state.note} getNotes={this.getNotes} />}/>
        <Route path="/note/:id" render={(props) => <NoteView {...props} notes={this.state.notes} getNotes={this.getNotes} getNote={this.getNote} />} />
      </div>
    );
  }
}

export default App;
