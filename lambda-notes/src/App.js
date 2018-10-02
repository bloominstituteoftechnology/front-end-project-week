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
      },
      Editing: false
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
      .then(response => this.setState({ notes: response.data }, this.props.history.push("/")))
      .catch(err => {console.log(err)});
  }

  editNote = (note) => {
    const blanknote={
    title: "",
    textBody: ""
  }

  const id = this.props.match.params.id;

    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response => {
      this.setState({
        note: response.data,
        title: response.data.title,
        textBody: response.data.textBody,
        Editing: false
      });
      this.props.history.push('/');
    })
    .catch(error => {console.error(error)});
  }
  

  render() {
    return (
      <div className="App">
        <SideBar />
        <Route exact path="/" render={(props) => <Notes {...props} notes={this.state.notes} />} />
        <Route path="/add-note" render={(props)=> <NoteForm {...props} {...this.state} editNote={this.editNote} postNote={this.postNote} note={this.state.note} />}/>
        <Route path="/note/:id" render={(props) => <NoteView {...props} notes={this.state.notes} editNote={this.editNote} editForm={this.editForm} getNote={this.getNote} />} />
      </div>
    );
  }
}

export default App;
