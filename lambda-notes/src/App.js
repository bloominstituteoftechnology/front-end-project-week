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
    const newNote = {...note, id: this.state.id };
    localStorage.setItem(`id${this.state.id}`, JSON.stringify(newNote));
    const newState = this.state.notes
    newState.push(newNote);
    const newID = this.state.id + 1;
    this.setState({ notes: newState, id: newID })

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
        <Route path="/" component={NavBar} />
        <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />} />
        <Route exact path="/AddNote" render={(props) => <AddNote {...props} add={this.handleAdd} />}/>
        <Route exact path="/notes/:id" component={Note} />
        <Route exact path="/notes/:id/EditNote" component={EditNote} />
      </div>
    );
  }
}

export default App;
