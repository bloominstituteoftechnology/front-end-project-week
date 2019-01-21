import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import DisplayNote from './components/DIsplayNote'
import EditNote from './components/EditNote';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      notes:[],
      error: ''
    };
  }
  componentDidMount(){
    this.fetchNotes();
  }

  fetchNotes = () => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data});
      })
      .catch(err => {
        
      })
  }

  addNote = note=>{
    axios.post("https://fe-notes.herokuapp.com/note/create", note).then(response => {
      console.log(response);
      return axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(response => this.setState({ notes: response.data }))
        .catch(error=>{
          this.setState({error: 'Failed to add a note'});
        })
    });
};

  deleteNote = id =>{
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log(response)
      return axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(response =>  this.setState({ notes: response.data }))
        .catch(error=>{
          this.setState({error: 'Failed to delete a note'});
        })
    })
  }

  editNote = (id, note) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then(response => {
        console.log(response);
        return axios
          .get("https://fe-notes.herokuapp.com/note/get/all")
          .then(response => this.setState({ notes: response.data }))
          .catch(error=>{
            this.setState({error: 'Failed to update a note'});
          })
      })
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' render={props=> <NoteList notes={this.state.notes}/>}/>
        <Route path='/create-note' render={props=><CreateNote {...props} addNote={this.addNote}/>}/>
        <Route exact path='/edit/:id' render={props=><EditNote {...props} edit={this.editNote}/>}/>
        <Route path='/view-note/:id'  render={props=><DisplayNote {...props} notes={this.state.notes} delete={this.deleteNote}/>}/>
      </div>
    );
  }
}



export default App;
