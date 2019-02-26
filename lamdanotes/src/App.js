import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';


import SidebarView from './sidebarComponent/sbView';
import NotesView from './NotesComponent/NotesView/notesView';
import AddNote from './formComponent/addNote';
import SingleNote from './NotesComponent/singleNote/singleNote';
import EditForm from './formComponent/editNote';
import LoginPage from './LoginPage/loginview';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      cNote: "",
      isLoggedIn: false,
      loginFailed: true,
      users: {
          username: "test",
          password: "test"
        } 
      }
    }

  // {/* Call to API and set the response data to our state */}
  componentDidMount() {
      this.getUpdatedNotes()
  }

  // <---------------------{{{----API CALLS------}}}--------------------->
  getUpdatedNotes = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res => this.setState({
            notes: res.data
          }))
        .catch(err => console.log(err))
  }
  

  addNote = (note) => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
          .then(res => console.log("returned from add",res))
          .catch(err => console.log(err))
  }

  deleteNote = (id) => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(res => {
            const filtered = this.state.notes.filter(note => note._id !== id);
            console.log(filtered)
            this.setState({
              notes: filtered
            })
        })
        .catch(err => console.log(err));
  } 

  editNote = (id, obj) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, obj)
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }


  // <---------------------{{{----EVENT HANDLERS------}}}--------------------->
  setCNote = (id) => {
    this.setState({
      cNote: id
    })
  }

  searchNotes = (term) => {
    console.log(term)
    const filteredSearch = this.state.notes.filter(string => string.title.toUpperCase().includes(term.toUpperCase()) || string.textBody.toUpperCase().includes(term.toUpperCase()) )
    this.setState({
      notes: filteredSearch
    })
  }

  handleAscendingSort = () => {
    //map through state to create a new array (keeps us from mutating state) then sort through the new array to compare each title and sort in acsending order.
    let nArr = this.state.notes.map(arr => {return arr}).sort((a,b) => {

        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        let comparison = 0;

        if(titleA > titleB) {
          comparison = 1
        } else if (titleA < titleB) {
          comparison = -1;
        }
        return comparison
    }) 
   
    //set the state to the nArr so view will update
    this.setState({
      notes: nArr
    })
  }

  handleDescendingSort = () => {
    
    let nArr = this.state.notes.map(arr => {return arr}).sort((a,b) => {

        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        let comparison = 0;

        if(titleA < titleB) {
          comparison = 1
        } else if (titleA > titleB) {
          comparison = -1;
        }
        return comparison
    }) 

    this.setState({
      notes: nArr
    })
  }

  handleLogin = obj => {
    console.log(obj.username)
    if(obj.username === this.state.users.username && obj.password === this.state.users.password) {
      this.setState({
      isLoggedIn: true
    }) 
    } else {
      console.log("failed")
    }
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    }) 
  }

handleError = () => {

}

// <---------------------{{{----APPLICATION/ROUTES------}}}--------------------->

// {/* Declare Routes, Sidebar navigation should always show so it is the root */}
  render() {
    if(this.state.isLoggedIn === false) {
      return(
        <Route path="/" render={props => (
            <LoginPage
            {...props} 
            handleLogin={this.handleLogin} 
            loginFailed={this.state.loginFailed}
            />
        )} />
      )
    }
    return (
      <div className="container">

          <Route path="/" render={props => (
            <SidebarView 
              {...props} 
              notes={this.state.notes} 
              searchNotes={this.searchNotes}  
              getUpdatedNotes={this.getUpdatedNotes} 
              handleAscendingSort = {this.handleAscendingSort}
              handleDescendingSort = {this.handleDescendingSort}
              handleLogout={this.handleLogout}
              /> )} />

          <Route 
            path="/notes"
            render={props => ( <NotesView {...props} notes={this.state.notes} /> )} 
          />

          <Route 
            path="/addnote"
            render={props=> ( <AddNote {...props} addNote={this.addNote} />)} 
          />

          <Route 
            path="/note/:id" 
            render={props => (
              <SingleNote {...props} note={this.state.notes} deleteNote={this.deleteNote} setCNote={this.setCNote} />
            )}
          />

          
          <Route 
              path="/editnote/:id"
              render={props=> ( <EditForm {...props} notes={this.state.notes} cNote={this.state.cNote} editNote={this.editNote} />)} 
          />
          
          
      </div>
    );
  }
}

export default App;
