import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ListView from './components/ListView';
import NavBar from './components/NavBar';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';
import Note from './components/Note';

class App extends Component {

  state = {
    notes: [],
    id: 0,
}

  handleAdd = (note) => {
    console.log(note);
    const newNote = {...note, id: this.state.id };
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
    let csvContent = "data:text/csv;charset=utf-8, Title,Text,ID\r\n";
    const notesExported = this.state.notes
    notesExported.forEach(function(rowArray){
        let row = Object.values(rowArray).join(",");
        csvContent += row + "\r\n";
    }); 
    return encodeURI(csvContent);
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
    return (
      <div className="App">
        <Route path="/"  render={(props) => <NavBar {...props} export={this.handleExport} />} />
        <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />} />
        <Route exact path="/AddNote" render={(props) => <AddNote {...props} add={this.handleAdd} />}/>
        <Route exact path="/notes/:id" render={(props) => <Note {...props} delete={this.handleDelete} />} />
        <Route exact path="/notes/:id/EditNote" render={(props) => <EditNote {...props} edit={this.handleEdit} />} />
      </div>
    );
  }
}

export default App;
