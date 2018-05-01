import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ListView from './components/ListView';
import NavBar from './components/NavBar';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import Note from './components/Note';
import { Route, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    notes: [],
    id: 0,
    isAuthenticated: false
}

  handleAdd = (note) => {
    axios.post('https://dry-brushlands-44600.herokuapp.com/api/notes/5ae89a20b285c6487b112267', note)
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

    axios.put(`https://dry-brushlands-44600.herokuapp.com/api/notes/5ae89a20b285c6487b112267/${num}`, note)
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

    axios.delete(`https://dry-brushlands-44600.herokuapp.com/api/notes/5ae89a20b285c6487b112267/${num}`)
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
    .then(success => {
      axios.get('https://dry-brushlands-44600.herokuapp.com/api/notes/5ae89a20b285c6487b112267')
      .then(res => {
        this.setState({ isAuthenticated: true, notes: res.data.notes})
        cb(success.data.success);
      })
      .catch(err => cb(err));
    })
    .catch(err => console.log(err));
  }

  handleSignup(user, pass, cb) {
    axios.post('https://dry-brushlands-44600.herokuapp.com/api/users', { "username": user, "password": pass })
    .then(success => {
        this.setState({ isAuthenticated: true })
        cb();
      })
    .catch(err => console.log(err));
  }

  handleSignout(cb) {
    this.setState({isAuthenticated: false});
    //clear localstorage
    cb();
  }

  componentWillMount() {
    // const memory = Array.from(Object.values(localStorage));
    // if (memory.length > 0) {
    // const last = memory.length - 1;
    // const memoryID = Number(JSON.parse(memory[last]).id) + 1;
    // const memoryNotes = [];
    // for (let i = 0; i < memory.length; i++) {
    //   memoryNotes.push(JSON.parse(memory[i]))
    // }
    // console.log(memoryNotes)
    // this.setState({ notes: memoryNotes, id: memoryID })
    // }

    // check if saved login in localstorage
    // if so this.setState authenticated:true
    //play animation

    if (this.state.isAuthenticated) {
      axios.get('https://dry-brushlands-44600.herokuapp.com/api/notes/5ae89a20b285c6487b112267')
      .then(res => {
        //route to /notes
        this.setState({ notes: res.data.notes})
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
        <Route path="/"  render={(props) => <NavBar {...props} export={this.handleExport} login={this.handleLogin} signup={this.handleSignup} signout={this.handleSignout} isAuth={this.state.isAuthenticated} />} />
        <PrivateRoute exact path="/notes" component={ListView} notes={this.state.notes} />
        <PrivateRoute exact path="/AddNote" component={AddNote} add={this.handleAdd} />
        <PrivateRoute exact path="/notes/:id" component={Note} delete={this.handleDelete} />
        <PrivateRoute exact path="/notes/:id/EditNote" component={EditNote} edit={this.handleEdit} />
      </div>
    );
  }
}

export default App;

