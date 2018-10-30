import React, { Component } from 'react';

import axios from 'axios';

import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";


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

componentDidMount() {
  axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
  .then(response=>this.setState({notes:response.data}))
  .catch(err=>{console.log("Something went wrong and we couldn't retrieve your notes: ",err)})
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

createNote = event=>{
  event.preventDefault();
  let note=this.state.newNote;
  if (note.title!=='' && note.textBody!==''){
     axios.post("https://fe-notes.herokuapp.com/note/create", note)
     .then(
      response=>{
        this.setState({notes:response.data})
      })
     .catch(error=>{console.log("An error occurred and your note was not added: ", error)}) 

this.setState({
  ...this.state,
  newNote: {
    title:'',
    textBody:''
  }
})
    } else {
    alert("Please fill out both the title and note text before submitting")
  }
}


  render() {
    return (
      <div className="App">
       <Sidebar />
<Route exact path="/" render={ownProps=>(<NoteList {...ownProps} notes={this.state.notes}/>)} />
<Route exact path="/create_new_note" render={ownProps=>(<CreateNote {...ownProps} changeHandler={this.changeHandler} createNote={this.createNote} newNote={this.state.newNote}/>)} />
{/* not implemented yet */}
<Route exact path="/note/:id" render={ownProps=>(<Note {...ownProps}/>)}/>
       
      
      </div>
    );
  }
}

export default App;
