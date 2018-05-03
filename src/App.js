import React, { Component } from 'react';
import Nav from './Nav';
import ListView from './ListView';
import Note from './Note';
import './App.css';
import AddNote from './AddNote';
import { Route } from 'react-router-dom';
import EditNote from './EditNote';

class App extends Component {
  state = {
    notes: [
      { title: 'Note Title', text: 'Fish Heads', id: 0 },
      { title: 'Note Title', text: 'Fish Heads', id: 1 },
      { title: 'Note Title', text: 'Yummy Yummy', id: 2 },
      { title: 'Note Title', text: 'Fish Heads', id: 3 },
      { title: 'Note Title', text: 'Fish Heads', id: 4 },
      { title: 'Note Title', text: 'Eat them up', id: 5 },
      { title: 'Note Title', text: 'Yum', id: 6 },
      { title: 'Note Title', text: 'Just Be Careful Of Mercury', id: 7 },
      { title: 'Note Title', text: 'Poisoning', id: 8 },
      { title: 'Note Title', text: 'Yuck', id: 9 },
    ],
    id: 0,
  }

  handleAdd = (note) => {
    const newNote = {...note, id: this.state.id };
    localStorage.setItem(`id${this.state.id}`, JSON.stringify(newNote));
    const newState = this.state.notes
    newState.push(newNote);
    const newID = this.state.id + 1;
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
    let csvContent = "data:text/csv;charset=utf-8, Title, Text, ID\r\n";
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
    const memoryID = JSON.parse(memory[last]).id + 1;
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
        <Route path="/" render={(props) => <Nav {...props} export={this.handleExport} />} />
        <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />} />
        <Route path="/AddNote" render={(props) => <AddNote {...props} add={this.handleAdd} />}/>
        <Route exact path="/notes/:id" render={(props) => <Note {...props} delete={this.handleDelete} />} />
        <Route path="/notes/EditNote/:id" render={(props) => <EditNote {...props} edit={this.handleEdit} />} />
      </div>
    );
  }
}

export default App; 