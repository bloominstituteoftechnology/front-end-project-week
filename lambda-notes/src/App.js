import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from "react-router-dom";

import './App.css';

import ListView from './components/ListView';
import NavBar from './components/NavBar';
import Login from './components/Login';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import Note from './components/Note';

axios.defaults.withCredentials = true;

class App extends Component {
  state = {
    notes: [],
    id: 0,
    username: false,
    isAuthenticated: false,
}

  handleAdd = (note) => {
    axios.post(`https://dry-brushlands-44600.herokuapp.com/api/notes/${this.state.id}`, note)
    .then(response => {
      const newState = this.state.notes
      newState.push(response.data);
      this.setState({ notes: newState })
      })
    .catch(err => console.log('there was an error adding the note:', err));
  }

  handleEdit = (note, num) => {
    let newState = this.state.notes
    const currentIndex = newState.findIndex((note) => note._id === num);
    const updatedNote = Object.assign(newState[currentIndex], note);
    newState[currentIndex] = updatedNote;
    this.setState({ notes: newState })

    axios.put(`https://dry-brushlands-44600.herokuapp.com/api/notes/${this.state.id}/${num}`, note)
    .then(response => {
      console.log('Updated note saved!');
    })
    .catch(err => console.log('there was an error saving the note:', err));
  }

  handleDelete = (num) => {
    let newState = this.state.notes
    const currentIndex = newState.findIndex((note) => note._id === num);
    newState.splice(currentIndex, 1)
    this.setState({ notes: newState })

    axios.delete(`https://dry-brushlands-44600.herokuapp.com/api/notes/${this.state.id}/${num}`)
    .then(response => {
      console.log('Deleted note');
      })
    .catch(err => console.log('there was an error deleting the note:', err));
  }

  handleExport = () => {
    if(this.state.isAuthenticated) {
      let csvContent = "data:text/csv;charset=utf-8, Note Title, Note Contents, Tags\r\n";
      const notesExported = this.state.notes;
      notesExported.forEach(function(rowArray){
          csvContent += `${rowArray.title} ,${rowArray.content} ,${rowArray.tags}\r\n`;
      }); 
      return encodeURI(csvContent);
    }
  }

  handleLogin(user, pass, cb) {
    axios.post('https://dry-brushlands-44600.herokuapp.com/api/users/login', { "username": user, "password": pass })
    .then(response => {
        localStorage.setItem("isAuthenticated", "true")
        const name = user.charAt(0).toUpperCase() + user.slice(1);
        this.setState({ isAuthenticated: true, notes: response.data.user.notes, id: response.data.user._id, username: name})
        cb(response.data.success);
    })
    .catch(err => {
      cb(err.message.toString().slice(err.length - 3));
    });
  }

  handleSignup(user, pass, cb) {
    axios.post('https://dry-brushlands-44600.herokuapp.com/api/users', { "username": user, "password": pass })
    .then(response => {
        const name = user.charAt(0).toUpperCase() + user.slice(1);
        this.setState({ isAuthenticated: true, id: response.data._id, username: name })
        localStorage.setItem("isAuthenticated", "true")
        cb(true);
      })
    .catch(err => {
      cb(err.message.toString().slice(err.length - 3));
    });
  }

  handleSignout(cb) {
    axios.post('https://dry-brushlands-44600.herokuapp.com/api/users/logout')
      .then(res => {
        localStorage.clear();
        this.setState({ notes: [], id: 0, isAuthenticated: false, username: false })
        cb();
      })
      .catch(err => {
        cb();
      });
  }

  isLoggedIn() {
    // if browser remembers a login
    if(localStorage.isAuthenticated === "true") {

      // animation
      const logo = document.querySelectorAll("#lnlogo")[0];
      logo.classList.toggle("spin");

      // check if session exists
      axios.get('https://dry-brushlands-44600.herokuapp.com/api/users')
      .then(resp => {
        // if so get notes
        if (resp.data._id) {
        axios.get(`https://dry-brushlands-44600.herokuapp.com/api/notes/${resp.data._id}`)
          .then(res => {
            const name = res.data.username.charAt(0).toUpperCase() + res.data.username.slice(1);
            this.setState({ isAuthenticated: true, notes: res.data.notes, id: res.data._id, username: name})
          })
          .catch(err => console.log(err));
        }
        else {
          logo.classList.toggle("spin");
          localStorage.clear();
        }
        })
      .catch(err => {
        logo.classList.toggle("spin");
        console.log(err);
    })
  }
}

  render() {

    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignout = this.handleSignout.bind(this);

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => this.state.isAuthenticated ? ( <Component {...props} {...rest} /> ) : ( <Redirect to="/" /> ) }/>
    );

    return (
      <div className="App">
        <PrivateRoute path="/notes"  component={NavBar} export={this.handleExport} signout={this.handleSignout} isAuth={this.state.isAuthenticated} username={this.state.username} />
        <PrivateRoute path="/AddNote"  component={NavBar} export={this.handleExport} signout={this.handleSignout} isAuth={this.state.isAuthenticated} username={this.state.username} />
        <Route exact path="/"  render={(props) => <Login {...props} isLoggedIn={this.isLoggedIn} login={this.handleLogin} signup={this.handleSignup} isAuth={this.state.isAuthenticated} />} />
        <PrivateRoute exact path="/notes" component={ListView} notes={this.state.notes} />
        <PrivateRoute exact path="/AddNote" component={AddNote} add={this.handleAdd} />
        <PrivateRoute exact path="/notes/:id" component={Note} delete={this.handleDelete} />
        <PrivateRoute exact path="/notes/:id/EditNote" component={EditNote} edit={this.handleEdit} />
      </div>
    );
  }
}

export default App;

