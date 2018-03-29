import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeftColumn from './components/LeftColumn';
import ListView from './components/ListView';
import CreateNote from './components/CreateNote';
import NoteView from './components/NoteView';
import EditNote from './components/EditNote';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={LeftColumn} />
          <Route exact path="/" component={ListView} />
          <Route exact path="/createnote" component={CreateNote} />
          <Route exact path="/noteview/:id" component={NoteView} />
          <Route path="/editnote" component={EditNote} />
        </div>
      </Router>
    );
  }
}

export default App;
