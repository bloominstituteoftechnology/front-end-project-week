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

  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />} />
        <Route exact path="/AddNote" component={AddNote} />
        <Route exact path="/notes/:id" component={Note} />
        <Route exact path="/notes/:id/EditNote" component={EditNote} />
      </div>
    );
  }
}

export default App;