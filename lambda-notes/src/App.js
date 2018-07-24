import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import DisplayNotes from './components/DisplayNotes';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={DisplayNotes} />
          <Route path="/note/:id" component={Note} />
          <Route path="/create" component={CreateNote} />
          <Route path="/edit" component={EditNote} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
