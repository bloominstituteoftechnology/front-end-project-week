import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListView from './components/ListView';
import NavBar from './components/NavBar';
import Login from './components/Login';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import Note from './components/Note';
import { Route, Redirect } from "react-router-dom";

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
    .catch(err => console.log(err));
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
    .catch(err => console.log(err));
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
    .catch(err => console.log(err));
  }

  handleExport = () => {
    if(this.state.isAuthenticated) {
      let csvContent = "data:text/csv;charset=utf-8, Title,Text\r\n";
      const notesExported = this.state.notes;
      notesExported.forEach(function(rowArray){
          csvContent += `${rowArray.title},${rowArray.text}\r\n`;
      }); 
      return encodeURI(csvContent);
    }
  }

  handleLogin(user, pass, cb) {
    axios.post('https://dry-brushlands-44600.herokuapp.com/api/users/login', { "username": user, "password": pass })
    .then(response => {
        localStorage.setItem("isAuthenticated", "true")
        this.setState({ isAuthenticated: true, notes: response.data.user.notes, id: response.data.user._id})
        cb(response.data.success);
    })
    .catch(err => console.log(err));
  }

  handleSignup(user, pass, cb) {
    axios.post('https://dry-brushlands-44600.herokuapp.com/api/users', { "username": user, "password": pass })
    .then(response => {
        this.setState({ isAuthenticated: true, id: response.data._id })
        localStorage.setItem("isAuthenticated", "true")
        cb();
      })
    .catch(err => console.log(err));
  }

  handleSignout(cb) {
    axios.post('https://dry-brushlands-44600.herokuapp.com/api/users/logout')
      .then(res => {
        localStorage.clear();
        this.setState({ notes: [], id: 0, isAuthenticated: false, username: false })
        cb();
      })
      .catch(err => console.log(err));
  }

  isLoggedIn() {
    if(localStorage.isAuthenticated === "true") {
    //play animation
      axios.get('https://dry-brushlands-44600.herokuapp.com/api/users')
      .then(resp => {
        if (resp.data._id) {
        axios.get(`https://dry-brushlands-44600.herokuapp.com/api/notes/${resp.data._id}`)
          .then(res => {
            const name = res.data.username.charAt(0).toUpperCase() + res.data.username.slice(1);
            this.setState({ isAuthenticated: true, notes: res.data.notes, id: res.data._id, username: name})
            //redirect
          })
          .catch(err => console.log(err));
        }
        else localStorage.clear();
        })
      .catch(err => console.log(err));
    }
  }

  render() {
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
        <Route exact path="/"  render={(props) => <Login {...props} isLoggedIn={this.isLoggedIn} login={this.handleLogin} signup={this.handleSignup} />} />
        <PrivateRoute exact path="/notes" component={ListView} notes={this.state.notes} />
        <PrivateRoute exact path="/AddNote" component={AddNote} add={this.handleAdd} />
        <PrivateRoute exact path="/notes/:id" component={Note} delete={this.handleDelete} />
        <PrivateRoute exact path="/notes/:id/EditNote" component={EditNote} edit={this.handleEdit} />
      </div>
    );
  }
}

export default App;

