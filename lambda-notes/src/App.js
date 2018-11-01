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
      //controls views on NoteList
        notes:[],
        //controls form in CreatNote, used to add new note in POST request
        newNote: {
          title: '',
          textBody:''
        },
        //controls form in NoteList's searchbar, used to filter views
        searchTerm:''
    }
}

//basic GET call that is used when initally loading the page and also to refresh the notelist
getNoteList=()=>{
  axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
  .then(response=>this.setState({notes:response.data}))
  .catch(err=>{console.log("Something went wrong and we couldn't retrieve your notes: ",err)})
}

// sort method via button: passed down to Notelist, a new GET call that reverses the order of the notes coming in (most recent notes in server are typically the last in the array)
sortNewToOld = () => {
  axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
  .then(response=>this.setState({notes:response.data.reverse()}))
  .catch(err=>{console.log("Something went wrong and we couldn't sort your notes: ",err)})
}

//sort method: orders notes based on alphabetical ordering of titles
sortAlphabetically = () => {
  axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
  .then(response=>this.setState({notes:response.data.sort((a,b)=>a.title.localeCompare(b.title))}))
  .catch(err=>{console.log("Something went wrong and we couldn't sort your notes: ",err)})
}

//initial loading of notes
componentDidMount() {
this.getNoteList();
}

//triggered in every onChange in the searchbar from inside searchHandler function, filters list view by note titles containing the current searchTerm
searchFilter = () => {
  if (this.state.searchTerm!=='') {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
    //added toLowerCase for both the titles coming from server and the searchTerm to make sure cases won't block a search
    .then(response=>this.setState({notes:response.data.filter(note=>note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))}))
    .catch(err=>{console.log("Something went wrong and we couldn't process this search: ",err)})
  } else {
    this.getNoteList();
  }
}

//controls searchBar input in NoteList
searchHandler = value => {
this.setState({...this.state,
searchTerm: value
});
this.searchFilter();
}

//controls CreateNote input form
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
       <Sidebar getNoteList={this.getNoteList} />
<Route exact path="/" render={ownProps=>(<NoteList 
{...ownProps} 
notes={this.state.notes} 
sortNewToOld={this.sortNewToOld} 
getNoteList={this.getNoteList} 
sortAlphabetically={this.sortAlphabetically} 
searchHandler={this.searchHandler} 
searchTerm={this.state.searchTerm}
/>)}/>
<Route exact path="/create_new_note" render={ownProps=>(<CreateNote {...ownProps} changeHandler={this.changeHandler} createNote={this.createNote} newNote={this.state.newNote}/>)} />
<Route exact path="/note/:id" render={ownProps=>(<FullNote {...ownProps} deleteNote={this.deleteNote} notes={this.state.notes}/>)}/>
       
      
      </div>
    );
  }
}

//passed through HOC Authenticate along with Login. Authenticate will display App if state props 'loggedIn' is true, else displays Login component
export default Authenticate(App, Login);
