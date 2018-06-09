import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import NoteList from './NoteList';
import SingleNoteView from './SingleNoteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={NoteList}/>
          <Route exact path="/notes" component={NoteList} />
          <Route path="/notes/:id" component={SingleNoteView}/>
          <Route path="/notes/create" component={CreateNote}/>
          <Route path="/notes/edit/:id" component={EditNote}/>
        </Switch>
      </div>
    );
  }
}

export default App;
