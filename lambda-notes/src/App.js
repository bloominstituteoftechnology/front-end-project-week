import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
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
        textBody: ''
      }
    }
  }

  componentDidMount(){
    this.getNotes();
  }

  getNotes = () => {
    axios
    .get("https://killer-notes.herokuapp.com/note/get/all")
    .then(response => this.setState({notes: response.data}))
    .catch(err => console.log(err))
  }
  postNote = (newNote) => {
    axios
      .post("https://killer-notes.herokuapp.com/note/create", newNote)
      .then(response => {
        console.log(response)
        this.setState({ notes: [...this.state.notes, {...newNote, _id: response.data.success}] })})
      .catch(err => {console.log(err)});
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path="/" render={(props) => <Notes {...props} notes={this.state.notes} />} />
        <Route path="/add-note" render={(props)=> <NoteForm {...props} postNote={this.postNote} note={this.state.note} />}/>
        <Route path="/note/:id" render={(props) => <NoteView {...props} notes={this.state.notes} getNotes={this.getNotes} getNote={this.getNote} />} />
      </div>
    );
  }
}

export default App;
