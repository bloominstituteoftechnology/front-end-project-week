import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListOfNotes from './components/notes-listview';
import SideBar from './components/sidebar';
import CreateNote from './components/create-note';
import EditNote from './components/edit-note';
import Note from './components/note';

class App extends Component {
  state = {
    notes: [],
    id: 0
  };

  handleAdd = note => {
    const newNote = { ...note, id: this.state.id };
    localStorage.setItem(`id${this.state.id}`, JSON.stringify(newNote));
    const newState = this.state.notes;
    newState.push(newNote);
    const newID = Number(this.state.id) + 1;
    this.setState({ notes: newState, id: newID });
  };

  handleEdit = (note, num) => {
    const newNote = { ...note, id: num };
    localStorage.setItem(`id${num}`, JSON.stringify(newNote));
    const memory = Array.from(Object.values(localStorage));
    if (memory.length > 0) {
      const memoryNotes = [];
      for (let i = 0; i < memory.length; i++) {
        memoryNotes.push(JSON.parse(memory[i]));
      }
      this.setState({ notes: memoryNotes });
    }
  };

  handleDelete = num => {
    localStorage.removeItem(`id${num}`);
    const memory = Array.from(Object.values(localStorage));
    if (memory.length >= 0) {
      const memoryNotes = [];
      for (let i = 0; i < memory.length; i++) {
        memoryNotes.push(JSON.parse(memory[i]));
      }
      this.setState({ notes: memoryNotes });
    }
  };

  componentWillMount() {
    const memory = Array.from(Object.values(localStorage));
    if (memory.length > 0) {
      const last = memory.length - 1;
      const memoryID = Number(JSON.parse(memory[last]).id) + 1;
      const memoryNotes = [];
      for (let i = 0; i < memory.length; i++) {
        memoryNotes.push(JSON.parse(memory[i]));
      }
      this.setState({ notes: memoryNotes, id: memoryID });
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <SideBar {...props} export={this.handleExport} />} />
        <Route exact path="/" render={props => <ListOfNotes {...props} notes={this.state.notes} />} />
        <Route exact path="/CreateNote" render={props => <CreateNote {...props} add={this.handleAdd} />} />
        <Route exact path="/notes/:id" render={props => <Note {...props} delete={this.handleDelete} />} />
        <Route exact path="/notes/:id/EditNote" render={props => <EditNote {...props} edit={this.handleEdit} />} />
        <Route exact path="/Registration" render={props => <Registration />} />
      </div>
    );
  }
}

export default App;
