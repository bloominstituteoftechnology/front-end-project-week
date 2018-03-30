import React, { Component } from 'react';
import './App.css';
import ListView from './components/ListView';
import NavBar from './components/NavBar';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import Note from './components/Note';
//import Login from './components/Login';
import { Route, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    notes: [],
    id: 0,
    isAuthenticated: false
}

  handleAdd = (note) => {
    const newNote = {...note, id: Number(this.state.id) };
    localStorage.setItem(`id${this.state.id}`, JSON.stringify(newNote));
    const newState = this.state.notes
    newState.push(newNote);
    const newID = Number(this.state.id) + 1;
    this.setState({ notes: newState, id: newID })
  }

  handleEdit = (note, num) => {
    const newNote = {...note, id: num };
    localStorage.setItem(`id${num}`, JSON.stringify(newNote));
    const memory = Array.from(Object.values(localStorage));
    if (memory.length > 0) {
      const memoryNotes = [];
      for (let i = 0; i < memory.length; i++) {
        memoryNotes.push(JSON.parse(memory[i]))
      }
      this.setState({ notes: memoryNotes})
    }
  }

  handleDelete = (num) => {
    localStorage.removeItem(`id${num}`);
    const memory = Array.from(Object.values(localStorage));
    if (memory.length >= 0) {
      const memoryNotes = [];
      for (let i = 0; i < memory.length; i++) {
        memoryNotes.push(JSON.parse(memory[i]))
      }
      this.setState({ notes: memoryNotes})
    }
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

  handleLogin(user, pass) {
    setTimeout(() => {
      console.log("Authenticating...")
      //GET request on user, if (response === pass)
      this.setState({isAuthenticated: true});
    }, 500);
  }

  handleSignout(cb) {
    this.setState({isAuthenticated: false});
    setTimeout(cb, 100);
  }

  componentWillMount() {
    const memory = Array.from(Object.values(localStorage));
    if (memory.length > 0) {
    const last = memory.length - 1;
    const memoryID = Number(JSON.parse(memory[last]).id) + 1;
    const memoryNotes = [];
    for (let i = 0; i < memory.length; i++) {
      memoryNotes.push(JSON.parse(memory[i]))
    }
    this.setState({ notes: memoryNotes, id: memoryID })
    }
  }

  render() {
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => this.state.isAuthenticated ? ( <Component {...props} {...rest} /> ) : ( <Redirect to="/" /> ) }/>
    );
    return (
      <div className="App">
        <Route path="/"  render={(props) => <NavBar {...props} export={this.handleExport} login={this.handleLogin} signout={this.handleSignout} isAuth={this.state.isAuthenticated} />} />
        <PrivateRoute exact path="/notes" component={ListView} notes={this.state.notes} />
        <PrivateRoute exact path="/AddNote" component={AddNote} add={this.handleAdd} />
        <PrivateRoute exact path="/notes/:id" component={Note} delete={this.handleDelete} />
        <PrivateRoute exact path="/notes/:id/EditNote" component={EditNote} edit={this.handleEdit} />
      </div>
    );
  }
}

export default App;

