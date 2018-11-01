import React, { Component } from 'react';

import axios from 'axios';

import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import FullNote from "./components/FullNote";
import CreateNote from "./components/CreateNote";

import Login from "./components/Login";
import Authenticate from "./components/Authenticate";

import './App.css';

import {Route} from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state={
        notes:[],
        newNote: {
          title: '',
          textBody:''
        }
       
    }
}

getNoteList=()=>{
  axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
  .then(response=>this.setState({notes:response.data}))
  .catch(err=>{console.log("Something went wrong and we couldn't retrieve your notes: ",err)})
}

sortNewToOld = () => {
  axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
  .then(response=>this.setState({notes:response.data.reverse()}))
  .catch(err=>{console.log("Something went wrong and we couldn't sort your notes: ",err)})
}

sortAlphabetically = () => {
  axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
  .then(response=>this.setState({notes:response.data.sort((a,b)=>a.title.localeCompare(b.title))}))
  .catch(err=>{console.log("Something went wrong and we couldn't sort your notes: ",err)})
}

componentDidMount() {
this.getNoteList();
}

changeHandler=(key, value) => {
  this.setState({
      ...this.state,
      newNote:{
      ...this.state.newNote,
        [key]: value
      }
    })
}

deleteNote = (event, id) => {
  event.preventDefault();
  axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
  .then(this.getNoteList)
  .catch(error=>{console.log("We were unable to delete this note: ", error)})
}

createNote = event=>{
  event.preventDefault();
  let note=this.state.newNote;
  if (note.title!=='' && note.textBody!==''){
     axios.post("https://fe-notes.herokuapp.com/note/create", note)
     .then(
      response=>{
        this.setState({notes:[...this.state.notes, {...note, _id:response.data}]
      }) })
     .catch(error=>{console.log("An error occurred and your note was not added: ", error)}) 

this.setState({
  ...this.state,
  newNote: {
    title:'',
    textBody:''
  }
});
    } else {
    alert("Please fill out both the title and note text before submitting")
  }
}


  render() {
    return (
      <div className="App">
       <Sidebar getNoteList={this.getNoteList}/>
<Route exact path="/" render={ownProps=>(<NoteList {...ownProps} notes={this.state.notes} sortNewToOld={this.sortNewToOld} getNoteList={this.getNoteList} sortAlphabetically={this.sortAlphabetically}/>)} />
<Route exact path="/create_new_note" render={ownProps=>(<CreateNote {...ownProps} changeHandler={this.changeHandler} createNote={this.createNote} newNote={this.state.newNote}/>)} />
<Route exact path="/note/:id" render={ownProps=>(<FullNote {...ownProps} deleteNote={this.deleteNote} notes={this.state.notes}/>)}/>
       
      
      </div>
    );
  }
}

export default Authenticate(App, Login);
