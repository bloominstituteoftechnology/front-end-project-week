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
    notes: [ 
      { title: 'Note Title 1', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 0 },
      { title: 'Note Title 2', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 1 },
      { title: 'Note Title 3', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 2 },
      { title: 'Note Title 4', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 3 },
      { title: 'Note Title 5', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 4 },
      { title: 'Note Title 6', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 5 },
  ],
    id: 0,
}

  handleAdd = (note) => {
    const addedNote = {...note, id: this.state.id };
    localStorage.setItem(`id${this.state.id}`, JSON.stringify(addedNote));
    const newState = this.state.notes
    newState.push(addedNote);
    const newID = this.state.id + 1;
    this.setState({ notes: newState, id: newID })

  }

  handleDelete = (num) => {
    localStorage.removeItem(`id${num}`);
    const memory = Array.from(Object.values(localStorage));
    if (memory.length >= 0) {
      const savedNotes = [];
      for (let i = 0; i < memory.length; i++) {
        savedNotes.push(JSON.parse(memory[i]))
      }
      this.setState({ notes: savedNotes})
    }
  }

  componentWillMount() {
    const memory = Array.from(Object.values(localStorage));
    if (memory.length > 0) {
    const last = memory.length - 1;
    const memoryID = JSON.parse(memory[last]).id + 1;
    const savedNotes = [{ title: 'Note Title 1', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 0 },
    { title: 'Note Title 2', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 1 },
    { title: 'Note Title 3', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 2 },
    { title: 'Note Title 4', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 3 },
    { title: 'Note Title 5', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 4 },
    { title: 'Note Title 6', text: 'Lambda School trains people to be software engineers at no up-front cost.', id: 5 },];
    for (let i = 0; i < memory.length; i++) {
      savedNotes.push(JSON.parse(memory[i]))
    }
    this.setState({ notes: savedNotes, id: memoryID })
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />} />
        <Route exact path="/AddNote" render={(props) => <AddNote {...props} add={this.handleAdd} />}/>
        <Route exact path="/notes/:id" component={Note} delete={this.handleDelete} />
        <Route exact path="/notes/:id/EditNote" component={EditNote} edit={this.handleEdit} />
      </div>
    );
  }
}

export default App;