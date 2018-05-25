import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import ListView from './components/ListView';
import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import NotesView from './components/NotesView';
import EditView from './components/EditView';


class App extends Component {
  render() {
    return (
      <div className="container App">
        <Navigation />
        <Route exact path="/" component={ListView}></Route>
        <Route exact path="/createNote" component={CreateNote}></Route>
        <Route exact path="/noteView" component={NotesView}></Route>
        <Route exact path="/editView" component={EditView}></Route>
      </div>
    );
  }
}

export default App;
