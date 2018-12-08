import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import EditView from './components/NoteAppViews/EditView'
import CreateView from './components/NoteAppViews/CreateView'
import Note from './components/NoteContainer/Note'
import SingleNoteView from './components/NoteAppViews/SingleNoteView'
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer'

class App extends Component {
  render() {
    return (
     <div className="App">
      <Sidebar/>
      <NoteContainer/>
      <Switch>
      <Route exact path="/" component={Note} />
      <Route exact path="/edit/:id" component={EditView}/>
      <Route exact path="/new/" component={CreateView} />
      <Route path='/note/:id' render={SingleNoteView}/>
      </Switch>
     </div>
    );
  }
}

export default App
