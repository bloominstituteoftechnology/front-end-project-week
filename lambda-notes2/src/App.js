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
}



handleDelete = (D) => {
  localStorage.removeItem(`id${D}`);
  const memory = Array.from(Object.values(localStorage));
  if (memory.length >= 0) {
    const memoryNotes = [];
    for (let i = 0; i < memory.length; i++) {
      memoryNotes.push(JSON.parse(memory[i]))
    }
    this.setState({ notes: memoryNotes})
  }
}


render() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />} />
      <Route exact path="/AddNote" render={(props) => <AddNote {...props} add={this.handleAdd} />}/>
      <Route exact path="/notes/:id" render={(props) => <Note {...props} delete={this.handleDelete} />} />
      <Route exact path="/notes/:id/EditNote" render={(props) => <EditNote {...props} edit={this.handleEdit} />} />
    </div>
  );
}
}

export default App;